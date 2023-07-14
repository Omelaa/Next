import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import {TheFooter, TheHeader} from '@/components'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Next',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <TheHeader/>
        <div className={"container"}>
            {children}
        </div>
        <TheFooter/>
        </body>
        </html>
    )
}
