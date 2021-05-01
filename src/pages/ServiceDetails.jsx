import React from 'react'

function ServiceDetails(props) {
    return (
        <div>
            <h1>Services Details Page: {props.match.params.id}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cupiditate tempora reprehenderit doloribus consequatur 
                 non voluptatem blanditiis soluta! Quibusdam a praesentium aliquid eius,
                 perspiciatis at dolor beatae fuga alias eos! Quod.
            </p>
        </div>
    )
}

export default ServiceDetails;
