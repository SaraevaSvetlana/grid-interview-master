import React from 'react';

const Grid = ({config, data}) => (
    <table>
        <thead>
        <tr>
            {config.map((item, index) =>
                <th key={`t ${index}`}>
                    {item.title}
                </th>
            )}

        </tr>

        </thead>
        <tbody>
        {data.map((str, index) => {
                if (str.number) {
                    return (<tr key={`tbody ${index}`}>
                        <th key={`tbody th ${index}`}>{str.number}</th>
                            <th key={`tbody thn ${index}`}>
                                    {config[1].component(str.name)}
                            </th>

                    </tr>)
                } else {
                    return (<tr key={`tbody ${index}`}>
                        <th key={`tbody1 ${index}`}>{str.imdbID}</th>
                        <th key={`tbody2 ${index}`}>{str.Title}</th>
                        <th key={`tbody3 ${index}`}>{str.imdbRating}</th>
                        <th key={`tbody4 ${index}`}>
                                {config[3].component(str.Trailer)}
                        </th>
                    </tr>)
                }

            }
        )}

        </tbody>
    </table>
);

export default Grid;