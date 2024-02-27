import './App.css';
import '@fontsource/open-sans';
import '@fontsource/manrope'; 
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <div className='w-full h-[798px] main-bg-gradient relative overflow-hidden'>
        <div className='absolute h-[1293px] w-[1293px] rounded-full bg-[#3D409A] top-[-647px] right-[-647px]'></div>
        <img src='images/dean-face.png' width={405} alt='face' className='absolute bottom-0 right-0'></img>
        <div className='flex justify-between mt-12 mx-28 relative z-10'>
          <div>
            <img src='images/logo.svg' alt='logo'></img>
          </div>
          <div className="flex flex-row space-x-10 font-[Open Sans] text-white items-center">
            <a href='#'>Product</a>
            <a href='#'>Service</a>
            <a href='#'>About</a>
            <button className='bg-white text-[#2E3192] px-10 py-2 rounded-3xl font-bold'>Log In</button>
          </div>
        </div>
        <div className='flex flex-col mx-28 text-white relative z-10'>
          <div className='flex flex-row mt-24 text-5xl'>Helping People</div>
          <div className='flex flex-row mt-4 text-7xl'>Gain Power in Their Life</div>
          <div className='flex flex-row mt-8 whitespace-nowrap'>Funding handshake buyer business-to-business metrics iPad partnership. First <br></br> mover advantage innovator success deployment non-disclosure.
          </div>
          <div className='flex flex-row space-x-6 mt-9'>
            <button className='rounded-[56px] px-14 py-4 bg-[#2E3192]'>Shop Now</button>
            <button className='rounded-[56px] px-14 py-4 border-white border-2'>Read More</button>
          </div>
          <div className='flex flex-row space-x-14 mt-24 mx-3'>
            <div className='flex flex-row space-x-2 text-4xl items-end'><img src='images/boldo.svg' alt='boldo'></img><div>Boldo</div></div>
            <div className='flex flex-row space-x-2 text-4xl items-end'><img src='images/presto.svg' alt='boldo'></img><div>Presto</div></div>
            <div className='flex flex-row space-x-2 text-4xl items-end'><img src='images/boldo.svg' alt='boldo'></img><div>Boldo</div></div>
            <div className='flex flex-row space-x-2 text-4xl items-end'><img src='images/presto.svg' alt='boldo'></img><div>Presto</div></div>
            <div className='flex flex-row space-x-2 text-4xl items-end'><img src='images/boldo.svg' alt='boldo'></img><div>Boldo</div></div>
          </div>
        </div>
      </div>
      <div className='bg-[#F8F8F8] pb-32'>
        <div className='grid grid-cols-3 gap-10 mt-[-100px] mx-56 text-center relative z-20'>      
          <div className='flex row-span-1'><img src='images/health1.png' alt='health1'  className='w-full'/></div>
          <div className='flex row-span-2'><img src='images/health3.png' alt='health3' className='w-full'/></div>
          <div className='flex row-span-1'><img src='images/health4.png' alt='health4' className='w-full'/></div>
          <div className='flex row-span-1 self-end'><img src='images/health5.png' alt='health5' className='w-full'/></div>
          <div className='flex row-span-1 self-end'><img src='images/health2.png' alt='health2' className='w-full'/></div>
        </div>
        <div className='flex flex-col mx-56 mt-14'>
          <div className='flex flex-row space-x-2 items-center'>
            <div className='text-[#D9D9D9] text-xl'>Our Story</div>
            <div className='w-20 h-2 rounded-md bg-[#D9D9D9] mt-2'></div>
          </div>
          <div className='mt-5 text-8xl'>Dr. Dean Howell</div>
          <div className='mt-5 text-[#2E3192] text-xl'>Expert Clinical Psychologist in Manhattan</div>
          <div className='mt-5 text-[#D9D9D9] text-xl'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </div>
          <div className='mt-3'><button className='rounded-[56px] px-14 py-4 border-[#2E3192] border-2 text-xl font-bold'>Read More</button></div>
        </div>
      </div>
      <div className='mt-14 flex flex-col mx-56 '>
        <div className='flex flex-row justify-center text-[#D9D9D9] text-xl tracking-[7px]'>DRDEANHOWELL</div>
        <div className='flex flex-row justify-center text-5xl mt-3'>Featured&nbsp;&nbsp; <b>Services</b></div>
        <div className='flex flex-row mt-24 space-x-24'>
          <div className='flex flex-col basis-1/3'>
            <img src='images/service1.png' alt='service1'></img>
            <div className='mt-6 text-2xl text-[2E2E2E] font-semibold'>Drug Abuse Prevention</div>
            <div className='mt-3 text-[#D9D9D9] text-xl font-normal'>Learning curve network effects return on investment.</div>
            <div className='mt-7 text-xl text-[#0A2640] font-bold flex flex-row space-x-3 cursor-pointer'><div>Explore page</div><div>-></div><div/></div>
          </div>
          <div className='flex flex-col basis-1/3'>
            <img src='images/service2.png' alt='service2'></img>
            <div className='mt-6 text-2xl text-[2E2E2E] font-semibold'>Assessment Treatment</div>
            <div className='mt-3 text-[#D9D9D9] text-xl font-normal'>Learning curve network effects return on investment.</div>
            <div className='mt-7 text-xl text-[#0A2640] font-bold flex flex-row space-x-3 cursor-pointer'><div>Explore page</div><div>-></div><div/></div>
          </div>
          <div className='flex flex-col basis-1/3'>
            <img src='images/service3.png' alt='service3'></img>
            <div className='mt-6 text-2xl text-[2E2E2E] font-semibold'>Health Psychology</div>
            <div className='mt-3 text-[#D9D9D9] text-xl font-normal'>Learning curve network effects return on investment.</div>
            <div className='mt-7 text-xl text-[#0A2640] font-bold flex flex-row space-x-3 cursor-pointer'><div>Explore page</div><div>-></div><div/></div>
          </div>
        </div>
      </div>
      <div className='mt-14 mx-16 flex flex-row'>
        <div className=''><img src='images/expertise1.png' alt='expertise1'></img></div>
        <div className='ml-2'><img src='images/expertise2.png' alt='expertise2'></img></div>
        <div className='flex flex-col ml-10 basis-3/5'>
          <div className='text-[#2E2E2E] text-7xl font-extrabold'>Areas of Expertise</div>
          <div className='text-[#2E3192] text-xl font-normal mt-6'>Expert Clinical Psychologist in Manhattan</div>
          <div className='text-[#595959] text-xl font-normal mt-2'>I’m a licensed clinical psychologist in private practice in the Manhattan where I provide psychotherapy for adult individuals and couples. I’m Board Certified in clinical psychology by the American Board of Professional Psychology (ABPP), a distinction held by fewer than 5% of psychologists.</div>
          <div className='flex flex-row mt-auto'><img src='images/signature.png' alt='signature' className='basis-1/6'></img></div>
        </div>
      </div>
      <div className=' mt-36 flex justify-between mx-24'>
        <img src='images/pls1.png' alt='pls1'></img>
        <img src='images/pls2.png' alt='pls2'></img>
        <img src='images/pls3.png' alt='pls3'></img>
        <img src='images/pls4.png' alt='pls4'></img>
        <img src='images/pls5.png' alt='pls5'></img>
      </div>
      <div className='mt-36 section-bg-gradient py-28 px-40 flex flex-col text-white'>
        <div className=' text-xl font-medium tracking-[2px]'>WHAT OUR CLIENTS SAY </div>
        <div className='flex flex-row items-end'>
          <div className='mt-5 text-7xl font-semibold'>Testimonials</div>
          <div className='ml-auto flex flex-row space-x-8'>
            <div className='mt-auto w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer'><img src='images/arrow-left.svg' alt='arrow-left'></img></div>
            <div className='mt-auto w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer'><img src='images/arrow-right.svg' alt='arrow-right'></img></div>
          </div>
        </div>
        <div className='flex flex-row space-x-6'>
          <div className=' mt-20 bg-white p-10 flex flex-col basis-1/3 rounded-xl'>
            <div className='text-black text-2xl font-normal'>“Buyer buzz partner network disruptive non-disclosure agreement business”</div>
            <div className='mt-10 flex flex-row space-x-4'>
              <img src='images/avatar1.svg' alt='avatar1'></img>
              <div className='flex flex-col text-[#0A2640]'>
                <div className=' text-base font-bold'>Albus Dumbledore</div>
                <div className=' text-sm font-normal mt-2'>Manager @ Howarts</div>
              </div>
            </div>
          </div>
          <div className=' mt-20 bg-white p-10 flex flex-col basis-1/3 rounded-xl'>
            <div className='text-black text-2xl font-normal'>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</div>
            <div className='mt-10 flex flex-row space-x-4'>
              <img src='images/avatar2.svg' alt='avatar2'></img>
              <div className='flex flex-col text-[#0A2640]'>
                <div className=' text-base font-bold'>Severus Snape</div>
                <div className=' text-sm font-normal mt-2'>Manager @ Slytherin</div>
              </div>
            </div>
          </div>
          <div className=' mt-20 bg-white p-10 flex flex-col basis-1/3 rounded-xl'>
            <div className='text-black text-2xl font-normal'>“Release facebook responsive web design business model canvas seed money monetization.”</div>
            <div className='mt-10 flex flex-row space-x-4'>
              <img src='images/avatar3.svg' alt='avatar3'></img>
              <div className='flex flex-col text-[#0A2640]'>
                <div className=' text-base font-bold'>Harry Potter</div>
                <div className=' text-sm font-normal mt-2'>Team Leader @ Gryffindor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-14 px-40 flex flex-col bg-[#F8F8F8]'>
        <div className='flex flex-row justify-center text-[#D9D9D9] text-xl tracking-[7px]'>DRDEANHOWELL</div>
        <div className='flex flex-row justify-center text-5xl mt-3'>Pricing &&nbsp;&nbsp; <b>Memberships</b></div>
        <div className='flex flex-row space-x-2 mt-20'>
          <div className='basis-1/4 bg-white px-6 py-11 flex flex-col text-[#0B2110]'>
            <div className=' text-[28px] font-medium flex flex-row justify-center'>Starter</div>
            <div className=' text-base font-normal mt-1 flex-row justify-center text-center'>Starter pack to help you to get started</div>
            <div className=' my-10 text-[40px] font-bold flex flex-row justify-center'>Free</div>
            <div className='flex flex-row justify-center'>
              <button className='rounded-[56px] px-4 py-2 border-black border-2'>Get Started</button>
            </div>
          </div>
          <div className='basis-1/4 bg-[#2e319292] px-6 py-11 flex flex-col text-[#0B2110]'>
            <div className=' text-[28px] font-medium flex flex-row justify-center'>Pro</div>
            <div className=' text-base font-normal mt-1 flex-row justify-center text-center'>More power for small teams create project plans with confidence</div>
            <div className=' my-10 text-[40px] font-bold flex flex-row justify-center items-center'><div className=' text-xl font-bold'>$</div>20 <div className=' text-xl font-bold'>/ month</div></div>
            <div className='flex flex-row justify-center'>
              <button className='rounded-[56px] px-4 py-2 bg-[#2E3192] text-white'>Get Started</button>
            </div>
          </div>
          <div className='basis-1/4 bg-white px-6 py-11 flex flex-col text-[#0B2110]'>
            <div className=' text-[28px] font-medium flex flex-row justify-center'>Business+</div>
            <div className=' text-base font-normal mt-1 flex-row justify-center text-center'>For companies that need to manage work happening across multiple teams.</div>
            <div className=' my-10 text-[40px] font-bold flex flex-row justify-center items-center'><div className=' text-xl font-bold'>$</div>100 <div className=' text-xl font-bold'>/ month</div></div>
            <div className='flex flex-row justify-center'>
              <button className='rounded-[56px] px-4 py-2 border-black border-2'>Get Started</button>
            </div>
          </div>
          <div className='basis-1/4 bg-[#2e319292] px-6 py-11 flex flex-col text-[#0B2110]'>
            <div className=' text-[28px] font-medium flex flex-row justify-center'>Enterprise</div>
            <div className=' text-base font-normal mt-1 flex-row justify-center text-center'>For enterprise that need additional security, control, and support.</div>
            <div className=' my-10 text-[40px] font-bold flex flex-row justify-center items-center'>Custom</div>
            <div className='flex flex-row justify-center'>
              <button className='rounded-[56px] px-4 py-2 border-black border-2 mt-auto'>Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
      <div className=' my-14 flex flex-col mx-56'>
        <div className='flex flex-row justify-center text-[#D9D9D9] text-xl tracking-[7px]'>OUR NEWS</div>
        <div className='flex flex-row justify-center text-5xl mt-3'>Featured&nbsp;&nbsp; <b>Articles</b></div>
        <div className='flex flex-row mt-24 space-x-24'>
          <div className='flex flex-col basis-1/3'>
            <img src='images/article1.png' alt='article1'></img>
            <div className='flex flex-row mt-6 space-x-3'>
              <div className='text-[#2E308C] font-bold'>Category</div>
              <div className='text-[#D9D9D9]'>November 22, 2021</div>
            </div>
            <div className='mt-3 text-black text-xl font-normal'>Pitch termsheet backing validation focus release</div>
            <div className='mt-7 text-xl text-[#0A2640] font-bold flex flex-row space-x-3 cursor-pointer'><img src='images/avatar4.svg' alt='avatar4'></img><div className='text-black text-xl font-normal'>Chandler Bing</div></div>
          </div>
          <div className='flex flex-col basis-1/3'>
            <img src='images/article2.png' alt='article2'></img>
            <div className='flex flex-row mt-6 space-x-3'>
              <div className='text-[#2E308C] font-bold'>Category</div>
              <div className='text-[#D9D9D9]'>November 22, 2021</div>
            </div>
            <div className='mt-3 text-black text-xl font-normal'>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</div>
            <div className='mt-7 text-xl text-[#0A2640] font-bold flex flex-row space-x-3 cursor-pointer'><img src='images/avatar5.svg' alt='avatar5'></img><div className='text-black text-xl font-normal'>Rachel Green</div></div>
          </div>
          <div className='flex flex-col basis-1/3'>
            <img src='images/article3.png' alt='article3'></img>
            <div className='flex flex-row mt-6 space-x-3'>
              <div className='text-[#2E308C] font-bold'>Category</div>
              <div className='text-[#D9D9D9]'>November 22, 2021</div>
            </div>
            <div className='mt-3 text-black text-xl font-normal'>Beta prototype sales iPad gen-z marketing network effects value proposition</div>
            <div className='mt-7 text-xl text-[#0A2640] font-bold flex flex-row space-x-3 cursor-pointer'><img src='images/avatar6.svg' alt='avatar6'></img><div className='text-black text-xl font-normal'>Monica Geller</div></div>
          </div>
        </div>
        <div className='flex flex-row justify-center'>
          <button className='mt-16 px-14 py-4 border-[#0A2640] border-2 text-[#0A2640] rounded-[56px]'>Load More</button>
        </div>
      </div>
      <div className='flex flex-row mx-56 mt-16 space-x-5'>
        <div className='basis-1/3 flex flex-col'>
          <div className='bg-[#2E3192] text-white text-xs font-normal py-1 w-32 text-center'>Get A Quote</div>
          <div className='text-[#2E2E2E] text-[55px] font-bold'>Book an Appointment</div>
          <div className='text-[#5C5C5C] text-sm font-normal tracking-[1px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus vel mauris scelerisque accumsan. Maecenas quis nunc sed sapien dignissim pulvinar. Se d at gravida.</div>
          <button className=' px-8 py-4 bg-[#2E3192] text-white w-40 mt-10'>VIEW PRICES</button>
        </div>
        <div className='basis-2/3 flex flex-col'>
          <div className='flex flex-row space-x-3'>
            <TextField id="filled-basic" label="Name" variant="filled" className='w-full'/> 
            <TextField id="filled-basic" label="Email" variant="filled" className='w-full'/>
          </div>
          <div className='mt-6'>
            <TextField id="filled-basic" label="Phone" variant="filled" className='w-full'/>
          </div>
          <div className='mt-6'>
            <TextField
              id="filled-multiline-static"
              label=""
              multiline
              rows={4}
              className='w-full'
              variant="filled"
            />
          </div>
          <button className='bg-[#2E3192] text-white mt-6 py-4'>SEND</button>
        </div>
      </div>
      <div className='bg-[#2E3192] mx-56 py-20 flex flex-col mt-40 text-white'>
        <div className='flex flex-row text-5xl font-bold justify-center'>Daily Promotions</div>
        <div className='flex flex-row justify-center text-sm font-normal w-2/3 mt-14 mx-auto text-center'>Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere est quis egestas. 
            Donec nec odio non tellus convallis mattis a nec purus. Duis quis tortor elit.
        </div>
        <div className='flex flex-row justify-center mt-14 space-x-9'>
          <input type='text' className='bg-white py-3 px-8 text-black rounded-[240px]' placeholder='Your email address'></input>
          <button className='rounded-[56px] px-14 py-4 bg-black'>Start Now</button>
        </div>
      </div>
      <div className='flex flex-row px-56 py-20 mt-20 bg-[#F4F4F4] space-x-20'>
        <div className='basis-1/3 flex flex-col'>
          <img src='images/footerlogo.svg' alt='logo' className='w-[220px]'></img>
          <div className='mt-10 text-base font-normal'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</div>
          <div className='mt-10 text-base font-normal'>All rights reserved.</div>
        </div>
        <div className='basis-2/3 flex flex-row space-x-16'>
          <div className='basis-1/3 flex flex-col'>
            <div className=' text-xl font-bold'>Landings</div>
            <div className='mt-10 text-base font-normal'>Home</div>
            <div className='mt-10 text-base font-normal'>Products</div>
            <div className='mt-10 text-base font-normal'>Service</div>
          </div>
          <div className='basis-1/3 flex flex-col'>
            <div className=' text-xl font-bold'>Company</div>
            <div className='mt-10 text-base font-normal'>Home</div>
            <div className='mt-10 text-base font-normal'>Careers</div>
            <div className='mt-10 text-base font-normal'>Services</div>
          </div>
          <div className='basis-1/3 flex flex-col'>
            <div className=' text-xl font-bold'>Resources</div>
            <div className='mt-10 text-base font-normal'>Blog</div>
            <div className='mt-10 text-base font-normal'>Products</div>
            <div className='mt-10 text-base font-normal'>Services</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
