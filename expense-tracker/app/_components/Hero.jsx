import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
  <div className="mx-auto max-w-screen-xl px-4 py-32 ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Gestiona tus gastos
        <strong className="font-extrabold text-primary sm:block"> Controla tu dinero </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Empieza a crear tu presupuesto y ahorra mucho dinero
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/sign-in"
        >
          Comienza
        </a>

        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
