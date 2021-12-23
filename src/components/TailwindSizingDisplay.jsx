function TailwindSizingDisplay() {
  return (
    <div>
      <h1 className="block sm:hidden">xs</h1>
      <h1 className="hidden sm:block">sm</h1>
      <h1 className="hidden md:block">md</h1>
      <h1 className="hidden lg:block">lg</h1>
      <h1 className="hidden xl:block">xl</h1>
      <h1 className="hidden 2xl:block">2xl</h1>
    </div>
  )
}

export default TailwindSizingDisplay