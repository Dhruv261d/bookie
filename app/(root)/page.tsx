import React from 'react'
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import {getAllBooks} from "@/lib/actions/book.actions";
import Search from "@/components/Search";
import Link from "next/link";

import { auth } from "@clerk/nextjs/server";

import { sampleBooks } from "@/lib/constants";

const Page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
    const { query } = await searchParams;
    const { userId } = await auth();

    let books = [];
    if (userId) {
        const bookResults = await getAllBooks(userId, query);
        books = bookResults.success ? bookResults.data ?? [] : [];
    } else {
        // Show sample books for logged out users
        books = query 
            ? sampleBooks.filter(b => 
                b.title.toLowerCase().includes(query.toLowerCase()) || 
                b.author.toLowerCase().includes(query.toLowerCase())
              )
            : sampleBooks;
    }

    return (
        <main className="wrapper container">
            <HeroSection />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
                <h2 className="text-3xl font-serif font-bold text-[#212a3b]">
                    {userId ? "Your Books" : "Explore Sample Books"}
                </h2>
                <Search />
            </div>

            {books.length > 0 ? (
                <div className="library-books-grid">
                    {books.map((book) => (
                        <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} />
                    ))}
                </div>
            ) : (
                <div className="library-empty-card text-center">
                    <p className="text-xl font-medium text-[var(--text-secondary)]">
                        {query ? "No books found matching your search." : "No books in your library yet."}
                    </p>
                    {userId && !query && (
                        <Link href="/books/new" className="text-[var(--color-brand)] font-bold mt-2 inline-block">
                            Upload your first book →
                        </Link>
                    )}
                </div>
            )}
        </main>
    )
}

export default Page
