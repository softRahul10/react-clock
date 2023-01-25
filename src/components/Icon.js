import Clock from './clock.jpg';

const Icon = () => {
    return (
        <div className='app-clock-icon'>
            <img src={Clock} style={{maxWidth:'100%',maxHeight:'100%'}} />
        </div>
    );
}