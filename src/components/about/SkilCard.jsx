export const SkillCard = ({name}) => {
    name = name?.toLowerCase();

    return (
        <div className="w-20 h-20 cursor-pointer rounded-md flex items-center justify-center">
            <img src={`/svg/${name}.svg`} alt={name} className="w-10 h-10 text-white"/>
        </div>
    );
};
