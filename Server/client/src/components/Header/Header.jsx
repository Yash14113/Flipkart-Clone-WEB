import {AppBar,Box,Toolbar,Typography,styled} from '@mui/material'
import Search from './Search'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'

const StyleHeader=styled(AppBar)`
    background:#2874f0;
    height:55px;
`
const Component=styled(Box)`
    margin-left:12%;
    line-height:0;
`
const SubhHeading=styled(Typography)`
    
    font-style:italic;
    font-size:10px;
`
const PluseImage=styled('img')(
    {
        width:10,
        height:10,
        marginLeft:3
    }
)

const CustomButtonWrapper=styled(Box)`
    margin:0 5% 0 auto;
`

function Header(){

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <StyleHeader>
            <Toolbar style={{minHeight:55}}>
                <Component>
                    <Link to='/' style={{textDecoration:'none'}}>
                    <img src={logoURL} alt="logoURL" style={{width:75}} />
                    <Box style={{display:'flex'}}>
                        <SubhHeading style={{color:'white'}}>Explore&nbsp; 
                            <Box component="span" style={{color:'yellow'}}>Plus</Box>
                         </SubhHeading>
                         <PluseImage src={subURL} alt="sub url" />
                    </Box>
                    </Link>
               
                </Component>
                <Search/> 
                <CustomButtonWrapper>
                    <CustomButton/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyleHeader>
    )
}

export default Header;
