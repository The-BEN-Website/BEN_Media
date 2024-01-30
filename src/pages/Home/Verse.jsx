const Verse = () => {
  return (
    <section className="w-full bg-my-black flex flex-col justify-center py-14 gap-5">
        <svg className="w-10 h-10 mx-auto mb-3 text-my-red" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <blockquote className="flex flex-col gap-5">
            <h1 className="text-3xl text-center w-3/5 mx-auto text-white">
                That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus.
            </h1>
            <p className="text-center text-gray-100 italic text-lg">Philemon 1: 6</p>
        </blockquote>
    </section>
  )
}

export default Verse