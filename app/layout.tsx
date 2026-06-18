import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'CatSafe | Smart Cat Hospitality',
  description: 'Smart cat hotel with luxury suites, real-time monitoring and WhatsApp updates.',
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return children;
}
