import React from 'react'

const WaveMoving = () => {
    return (
        <div>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
                <defs>
                    <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
                        <stop offset="5%" stop-color="#301b70ff">
                            </stop>
                            <stop offset="95%" stop-color="#abb8c3ff">
                                </stop>
                                </linearGradient>
                                </defs>
                                <path d="M 0,400 C 0,400 0,200 0,200 C 177.7333333333333,173.73333333333335 355.4666666666666,147.46666666666667 530,155 C 704.5333333333334,162.53333333333333 875.8666666666666,203.86666666666665 1027,217 C 1178.1333333333334,230.13333333333335 1309.0666666666666,215.06666666666666 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0">
                                </path>
                            </svg>
                        </div>
    )
}

export default WaveMoving
