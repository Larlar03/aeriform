import { useState, useEffect } from 'react';
import ResultsCard from './results-card/results-card';
import ResultsNav from './results-nav/results-nav';
import Studio from '../../types/studios';

interface Props {
    results?: Studio[];
}

const Results = (props: Props) => {
    const [resultsTotal, setResultsTotal] = useState<number>(0);
    const [prevCard, setPrevCard] = useState<number>(0);
    const [activeCard, setActiveCard] = useState<number>(0);
    const [nextCard, setNextCard] = useState<number>(1);

    useEffect(() => {
        if (props.results) {
            setResultsTotal(props.results.length);
            setPrevCard(props.results.length - 1);
        }
    }, [props.results]);

    const handleNextClick = () => {
        if (props.results) {
            setPrevCard(prevCard === props.results.length - 1 ? 0 : prevCard + 1);
            setActiveCard(activeCard < props.results.length - 1 ? activeCard + 1 : 0);
            setNextCard(nextCard === props.results.length - 1 ? 0 : nextCard + 1);
        }
    };

    const handlePrevClick = () => {
        if (props.results) {
            setPrevCard(prevCard === 0 ? props.results.length - 1 : prevCard - 1);
            setActiveCard(activeCard === 0 ? props.results.length - 1 : activeCard - 1);
            setNextCard(nextCard === 0 ? props.results.length - 1 : nextCard - 1);
        }
    };

    return (
        <>
            <ResultsNav
                resultsTotal={resultsTotal}
                activeCardNum={activeCard}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
            />
            {props.results && (
                <div className='h-auto min-h-auto grid grid-cols-3 pb-10 justify-center'>
                    {props.results?.length <= 2 && (
                        <ResultsCard cardPosition='center-card' studio={props.results[activeCard]} isActive={true} />
                    )}
                    {props.results?.length >= 3 && (
                        <>
                            <div className='invisible lg:visible'>
                                <ResultsCard
                                    cardPosition='left-card'
                                    studio={props.results[prevCard]}
                                    isActive={false}
                                />
                            </div>
                            <ResultsCard
                                cardPosition='center-card'
                                studio={props.results[activeCard]}
                                isActive={true}
                            />
                            <div className='invisible lg:visible'>
                                {' '}
                                <ResultsCard
                                    cardPosition='right-card'
                                    studio={props.results[nextCard]}
                                    isActive={false}
                                />
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Results;
