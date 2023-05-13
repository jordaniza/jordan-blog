
const Footer = () => {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer class="w-full mt-5 flex flex-col text-center">
      <hr class="w-full border-1 border-black" />
      <p 
      class="w-full my-3 font-bold text-red-600 hover:text-red-900 underline cursor-pointer"
      onClick={toTop}>Top</p>
    </footer>
  )
}

export default Footer;