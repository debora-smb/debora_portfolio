export default function SkillsBar({ scrollPosition }) {
  return (
    <div className="w-full">
      <div className="w-full bg-[#5c636e]">
        <div className="h-[40px] w-full bg-[#445f8b] overflow-hidden">
          <div
            className={`transition-all duration-100 ease-in-out h-full w-0 bg-yellow`}
            style={{ width: `${scrollPosition}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};