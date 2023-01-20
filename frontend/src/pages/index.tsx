import { Inter } from '@next/font/google'
import Login from './login';


const inter = Inter({ subsets: ['latin'] })

type ValuesProps = {
  email: string;
  password: string
}

export default function Home() {

  return (
    <div className="App">
      <Login/>
    </div>
  );
}