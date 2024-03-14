import React from 'react'
import "./Vaccine.css"

function Vaccine() {
    return (
        <div className='container'>
            <div className='top'>

                <div className='detail'>
                    <div className='heading'>
                        <div id='up'>COVID-19 Vaccination Got Easier With,</div>
                        <div id='down'>Vaccination.ng</div>
                    </div>
                    <div className='para'>
                        <p>Vaccination.ng will help you find the nearest centre for vaccination, in all 36 states in Nigeria.</p>
                    </div>
                    <div className='buttons'>
                        <button id='left'>Get Vaccine</button>
                        <button id='right'>Help Centre</button>
                    </div>
                </div>

                <div className='vacfoto'>
                    <img id='vacfo' src='https://s3-alpha-sig.figma.com/img/7fb2/05b7/772c9e7e6c73d96842b7a6e5a6a1d924?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4IXeVGXvIvGpGT3ILb08od9CjeybG-pzQv49R6SiBWxEK11OTS6-5WvxhWJJH24vvkEcEEHH10fUtsH1ZtHpJP9HHd~ZPa9yy2MIRKWRWAjifLTvHJZneRKU0DM10NEYB2efNc4JiCZDpD6QEMFJJDNRzMOyPglTwZ6J2MYTqIZ9B7FIsYlbenAOQBAJ0VnKxLrL5zBOPq7AqceuByk57pWN8IS-H~vQ5vzEPl3g5qNIYdToLLugejo8-UmIgEh8IxEzm5qA4O3CK92YIo1vPo6g8gentBAxviGnldgX36hWD4JDXfBXhSuURH1Iy74bS0OkE7nK1a1QEK~17Szyg__' alt='' />
                </div>

            </div>
            <div className='midpage'>
                <div className='midd'>
                    <div className='middle'>
                        <div className='tags'>
                            <div className='one'>
                                <div id='icons'><i class="fa-solid fa-location-dot "></i></div>
                                <div>
                                    <div id='upper'>Location</div>
                                    <div>Ikeja Lagos, Nigeria</div>
                                </div>
                            </div>
                            <div className='two'>
                                <div id='icons'><i class="fa-solid fa-calendar-days "></i></div>
                                <div>
                                    <div id='upper'>Date</div>
                                    <div>29 February, 2022</div>
                                </div>
                            </div>
                            <div className='three'>
                                <div id='icons'><i class="fa-solid fa-shield "></i></div>
                                <div>
                                    <div id='upper'>Vaccine Type</div>
                                    <div>Mordena</div>
                                </div>
                            </div>
                            <div id='last'><button>Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='botpage'>
                <div className='bottom'>
                    <div className='result'>
                        <div id='database'>Check your COVID-19 result on our Database</div>
                    </div>
                    <div className='fields'>
                        <div id='inp'><input type='text' placeholder='Okeowo' /></div>
                        <div id='inp'><input type='text' placeholder='NIK Number' /></div>
                        <div id='endbutton'>
                            <div id='check'><button>Check</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vaccine
