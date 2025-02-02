// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = BooksType[]

const booksDB = [
    { id: 1, title: 'title 1' },
    { id: 2, title: 'name ' },
    { id: 3, title: 'title 2' }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        let books = booksDB

        const term = req.query.term as string

        if (term) {
            books = books.filter(b => b.title.toLowerCase().includes(term.toLowerCase()))
        }
        res.status(200).json(books)
    }
}

type BooksType = {
    id: number,
    title: string
}