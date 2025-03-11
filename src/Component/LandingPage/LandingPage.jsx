    import React from 'react'
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import CardActionArea from '@mui/material/CardActionArea';
    import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
    import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
    import AccessibilityIcon from '@mui/icons-material/Accessibility';
    import { useNavigate } from 'react-router-dom';
    import Logo from "../../assets/gyansys-logo-black.png";

    import './LandingPage.css'
    
    const LandingPage = () => {
        const navigate = useNavigate();
    return (
        <>
        <div className='part1'>
        <header className='logo'>
            <div className='header-logo'> <img src={Logo} alt="" className='img' /> <p> Health And Wellness Portal </p></div>
            <div className='loginsignup'>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')}>SignUp</button>
            </div>
        </header>
        <section className='section1'>
            <div className="sec1">
                <h1>Unlock a Healthier, Happier You.</h1>
                <h2>Start your wellness journey today! Our portal ensures you never miss an opportunity to improve your health, track your participation, and connect with the resources you need to thrive—professionally and personally.</h2>
                <div className='allprograms' onClick={() => navigate('/allprograms')}>Step Into a Healthier Tomorrow, Explore Our Wellness Programs Today!</div>
            </div>
            <div>
                <img src='src/assets/section1.png'/>
            </div>
        </section>
        </div>
        <div className='section2'>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="190"
            image="https://content.schoolinsites.com/api/documents/6a4998584b984058b9c6d6802ce8a982.png"
            alt="image1"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Program Discovery & Enrollment
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Employees can easily browse and enroll in various wellness programs with a simple click, encouraging active participation.
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="190"
            image="https://www.charliehealth.com/wp-content/uploads/2022/01/iStock-1469940166-1-800x600.png"
            alt="image2"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Automatic Participation Tracking
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The portal automatically tracks employee participation in wellness programs, ensuring accurate progress monitoring and eliminating the need for manual tracking.
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="190"
            image="https://insights.workwave.com/wp-content/uploads/2019/01/reporting.jpg"
            alt="image3"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            HR Dashboard & Reporting
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            HR has access to a comprehensive dashboard for managing wellness programs, tracking employee participation, and generating insightful reports to measure program effectiveness and overall wellness trends.
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
        <div className='section3'>
            <div>
                <img src='src/assets/section3.png' id='img3'/>
            </div>
            <div>
            <h2>Take Charge of Your Well-Being!</h2>
            <p>It's easy to get started on your wellness journey. Whether you're interested in fitness challenges, mindfulness sessions, or nutrition workshops, our portal offers a variety of programs to support your physical and mental health.</p>
            <ul type='none'>
                <li><ScreenSearchDesktopIcon/> Browse the available programs that suit your goals and interests.</li><br/>
                <li><AppRegistrationIcon/> Enroll with just a click, and start tracking your progress automatically.</li><br/>
                <li><AccessibilityIcon/> Access resources like fitness plans, mental health support, and personalized guidance to keep you on track.</li>
            </ul>
            </div>
        </div>
        <footer className="footer">
            <p>&copy; 2025 Health & Wellness Portal. All Rights Reserved.</p>
        </footer>
        </>
    )
    }
    
    export default LandingPage
    