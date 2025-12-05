interface menuBtn {
  menuItm: string;
  textSizze: string;
}

export default function NavBtn({ menuItm, textSizze }: menuBtn) {
  return (
    <button
      className={`button px-3 py-2 ${textSizze} uppercase font-extrabold text-[#f0ecda] cursor-pointer leading-none `}
    >
      {menuItm}
    </button>
  );
}
