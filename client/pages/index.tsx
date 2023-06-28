import Input from "@/components/Input/Input";
import { Visibility } from "@mui/icons-material";



export default function Home() {
  return (
    <main className='w-ful'>
      <center>
        <h1>Hello World!!!</h1>
        <div className=''>
          <Input
            type='text'
            placeholder='Enter your name'
            validationError='Please enter a valid name'
            icon={Visibility}
            className='p-4 rounded-md'
          />
        </div>
      </center>
    </main>
  );
}
