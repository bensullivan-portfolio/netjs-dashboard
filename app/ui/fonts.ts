import { Inter, Lusitana, Roboto_Mono, Montserrat } from 'next/font/google';

export const inter = Inter({ subsets: ['latin']});
export const lusitana = Lusitana({ subsets: ['latin'], weight: '700', });
export const roboto_mono = Roboto_Mono({
    subsets:['latin'],
    weight: '700'
});
export const montserrat = Montserrat({
    subsets:['latin'],
    weight: 'variable',
    display: 'swap'
})
