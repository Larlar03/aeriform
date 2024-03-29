import Service from '../../../types/service';
import './option-button.css';

interface Props {
    optionData: Service;
    handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const OptionButton = (props: Props) => {
    return (
        <button
            onClick={props.handleClick}
            id={props.optionData._id}
            data-testid='option-button'
            className='hover-grow rounded-full p-2 border-[1px] border-medium-slate-blue font-medium font-spacegrotesk hover:cursor-pointer hover:bg-medium-slate-blue'
        >
            {props.optionData.service}
        </button>
    );
};

export default OptionButton;
