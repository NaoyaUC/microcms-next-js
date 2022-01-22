

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <div
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "w-screen max-w-md right-0 absolute bg-stone-200 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-md p-4 space-y-6 overflow-y-scroll h-full">
          <div className="flex justify-end">
            <button
              className="shadow p-1 w-8 h-8 rounded bg-stone-100 font-bold"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ×
            </button>
          </div>
          コンテンツを表示
          {children}
        </article>
      </section>

      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}