import { Inter } from '@next/font/google'
import Login from './login';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className="App">
      <Login/>
    </div>
  );
}