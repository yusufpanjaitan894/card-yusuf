import Image from 'next/image'

export default function Home() {
  return (

<section class="pt-16 bg-blueGray-50">
<div class="w-full lg:w-4/12 px-4 mx-auto">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
          </div>
        </div>  
        <div className="flex justify-between items-center my-5 px-6">
                        <a href="https://github.com/yusufpanjaitan894" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">GitHub</a>
                        <a href="https://yusuf-panjaitan-209985179/" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Linkedin</a>
                        <a href="https://www.instagram.com/yusufpanjaitan__/" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                    </div>
        <div class="w-full px-2 text-center mt-30">
          <div class="flex justify-center py-2 lg:pt-4 pt-2">
          </div>
        </div>
        <Image src='/yusuf.png' width={100} height={100} alt="yusuf's photo"/>
      </div>
      <div class="text-center mt-12">
        <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          Yusuf Relano Panjaitan
        </h3>
        <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          Indonesia, Sumatera Utara
        </div>
        <div class="mb-2 text-blueGray-600 mt-10">
          <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
          Web Developer
        </div>
        <div class="mb-2 text-blueGray-600">
          <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
          Del Institute of Technology
        </div>
      </div>
      <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
              I am a student at the Del Institute of Technology and I took a D3 Computer Technology Study Program, to develop web with experience in front-end development. I am interested in attractive UI/UX design and have expertise in JavaScript, HTML, CSS and Python. I like working in a team and looking for opportunities to develop my skills in web development.
            </p>
            <a href="javascript:void(0);" class="font-normal text-pink-500">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer class="relative  pt-8 pb-6 mt-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-6/12 px-4 mx-auto text-center">
      </div>
    </div>
  </div>
</footer>
</section>
  )
}
