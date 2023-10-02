import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {
  TextField,
  Divider,
  CircularProgress
} from "@mui/material";



import img1 from "../../../src/Component2.svg";
import img2 from "../../../src/Component3.svg";
import img3 from "../../../src/Component4.svg";

import { ReactComponent as ReactLogo } from "../../../src/Component1.svg";

import { getHouseAdvertPage } from "../../api/houseAdvert.api";
import { getHousemateSearchingAdvertPage } from "../../api/housemateSearchingAdvert.api";
import { getHousemateWantingAdvertPage } from "../../api/housemateWantingAdvert.api";
import { getBelongingsAdvertPage } from '../../api/belongingsAdvert.api';
import HouseCard from "../../components/Card/HouseAdvertCard";
import BelongingsCard from "../../components/Card/BelongingsAdvertCard";
import HousemateSearchingAdvertCard from "../../components/Card/HousemateSearchingAdvertCard";
import HousemateWantingAdvertCard from "../../components/Card/HousemateWantingAdvertCard";
import AppBar3 from "../../components/AppBar3";
import Footer from "../../components/Footer/Footer";


const advertType = [
  {
    value: "satilikEv",
    label: "Satılık Ev",
  },
  {
    value: "kiralikEv",
    label: "Kiralık Ev",
  },
  {
    value: "satilikEsya",
    label: "satilikEsya",
  },
  {
    value: "evArkadasIlan",
    label: "Ev Arkadasi İlanları",
  },
];
function HomePage() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [loading, setLoading] = React.useState(true);

  const [houseAdverts, setHouseAdverts] = React.useState([]);
  const [housemateSearchingAdverts, setHousemateSearchingAdverts] = React.useState([]);
  const [housemateWantingAdverts, setHousemateWantingAdverts] = React.useState([]);
  const [belongingsAdverts, setBelongingsAdverts] = React.useState([]);

  

  const getHouseAds = async () => {
    try {
      const houseAds = await getHouseAdvertPage(0, 5);
      setHouseAdverts(houseAds?.content);
    } catch (error) {
      alert(error);
    }
  }

  const getHousemateSearchingAds = async () => {
    try {
      const housemateSearchingAds = await getHousemateSearchingAdvertPage(0, 5);
      setHousemateSearchingAdverts(housemateSearchingAds?.content);
    }
    catch (error) {
      alert(error);
    }
  }

  const getHousemateWantingAds = async () => {
    try {
      const housemateWantingAds = await getHousemateWantingAdvertPage(0, 5);
      setHousemateWantingAdverts(housemateWantingAds?.content);
    }
    catch (error) {

    }
  }

  const getBelongingsAds = async () => {
    try {
      const belongingsAds = await getBelongingsAdvertPage(0, 5);
      
      setBelongingsAdverts(belongingsAds?.content);
    }
    catch (error) {

    }
  }

  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    getHouseAds();
    getHousemateSearchingAds();
    getHousemateWantingAds();
    getBelongingsAds();

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <CircularProgress/>
    )
  }
  return (
    <>
      
      <Box className="backgroundMain">
      <AppBar3/>
        <Box sx={{ textAlign: "center", color: "#ffff" }}>
          <Typography
            sx={{ mt: 4, fontSize: "54px", fontWeight: "bold" }}
            variant="h1"
            component="h2"
          >
            Find Your House/Housemate/Stuff <br />
            What You Need
          </Typography>
          
          <Box
            sx={{
              mt: 8,
              p: 2,
              pt: 4,
              backgroundColor: "#fff",
              width: "80%",
              alignItems: "center",
              display: "inline-block",
              borderRadius: 2,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Enter Keyword"
              variant="outlined"
              sx={{ mr: 2 }}
            />

            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="satilikEv"
              helperText="Please select your currency"
              sx={{ mr: 2 }}
            >
              {advertType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              sx={{ mr: 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Min Price"
              variant="outlined"
              sx={{ mr: 2 }}
            />
                 <TextField
              id="outlined-basic"
              label="Max Price"
              variant="outlined"
              sx={{ mr: 2 }}
            />
            <Button
              sx={{ backgroundColor: "#FF5A3C", color: "#ffff", mt: 1, ml: 2 }}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: "20px", textAlign: "center", bottom: 0 }}>
          <svg
            width="114"
            height="68"
            viewBox="0 0 114 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_33_54)">
              <path
                d="M42 8L57 18.9091L72 8"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42 22L57 32.9091L72 22"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3071 46.3C13.9204 46.3 14.4471 46.4033 14.8871 46.61C15.3271 46.81 15.7138 47.13 16.0471 47.57L15.0971 48.5C14.9238 48.14 14.6938 47.8733 14.4071 47.7C14.1204 47.52 13.7571 47.43 13.3171 47.43C12.9171 47.43 12.6071 47.5067 12.3871 47.66C12.1738 47.8067 12.0671 48.0033 12.0671 48.25C12.0671 48.4767 12.1771 48.6567 12.3971 48.79C12.6171 48.9233 13.0138 49.04 13.5871 49.14C14.1871 49.2533 14.6638 49.3933 15.0171 49.56C15.3704 49.7267 15.6271 49.9367 15.7871 50.19C15.9538 50.4367 16.0371 50.7467 16.0371 51.12C16.0371 51.5267 15.9204 51.88 15.6871 52.18C15.4604 52.4733 15.1404 52.7 14.7271 52.86C14.3204 53.02 13.8538 53.1 13.3271 53.1C12.6004 53.1 12.0038 53 11.5371 52.8C11.0771 52.5933 10.7038 52.2833 10.4171 51.87L11.2371 50.89C11.4838 51.2967 11.7671 51.58 12.0871 51.74C12.4071 51.8933 12.8038 51.97 13.2771 51.97C13.7038 51.97 14.0271 51.9033 14.2471 51.77C14.4738 51.6367 14.5871 51.4467 14.5871 51.2C14.5871 51.02 14.4804 50.87 14.2671 50.75C14.0604 50.63 13.6871 50.5167 13.1471 50.41C12.5271 50.2833 12.0304 50.1333 11.6571 49.96C11.2904 49.7867 11.0238 49.5733 10.8571 49.32C10.6904 49.0667 10.6071 48.7533 10.6071 48.38C10.6071 47.9867 10.7138 47.6333 10.9271 47.32C11.1404 47 11.4504 46.75 11.8571 46.57C12.2704 46.39 12.7538 46.3 13.3071 46.3ZM24.9729 51.18C24.7796 51.8133 24.4362 52.2933 23.9429 52.62C23.4496 52.94 22.8596 53.1 22.1729 53.1C21.5262 53.1 20.9629 52.9633 20.4829 52.69C20.0029 52.4167 19.6329 52.0267 19.3729 51.52C19.1196 51.0067 18.9929 50.4 18.9929 49.7C18.9929 49 19.1196 48.3967 19.3729 47.89C19.6329 47.3767 19.9996 46.9833 20.4729 46.71C20.9529 46.4367 21.5129 46.3 22.1529 46.3C22.8396 46.3 23.4196 46.4433 23.8929 46.73C24.3729 47.0167 24.7029 47.4433 24.8829 48.01L23.6329 48.54C23.5262 48.1467 23.3596 47.8633 23.1329 47.69C22.9062 47.5167 22.5996 47.43 22.2129 47.43C21.6529 47.43 21.2129 47.6267 20.8929 48.02C20.5796 48.4133 20.4229 48.9733 20.4229 49.7C20.4229 50.4267 20.5762 50.9867 20.8829 51.38C21.1896 51.7733 21.6229 51.97 22.1829 51.97C22.9896 51.97 23.4962 51.58 23.7029 50.8L24.9729 51.18ZM30.7491 50.47H29.5091V53H28.1491V46.4H31.0591C31.8124 46.4 32.3991 46.58 32.8191 46.94C33.2457 47.2933 33.4591 47.7933 33.4591 48.44C33.4591 48.9133 33.3424 49.31 33.1091 49.63C32.8757 49.95 32.5424 50.18 32.1091 50.32L33.8491 53H32.2991L30.7491 50.47ZM29.5091 49.42H30.8791C31.2791 49.42 31.5724 49.3433 31.7591 49.19C31.9524 49.03 32.0491 48.7867 32.0491 48.46C32.0491 48.1333 31.9524 47.8933 31.7591 47.74C31.5724 47.58 31.2791 47.5 30.8791 47.5H29.5091V49.42ZM39.7276 46.3C40.3742 46.3 40.9342 46.4367 41.4076 46.71C41.8876 46.9833 42.2542 47.3767 42.5076 47.89C42.7676 48.3967 42.8976 49 42.8976 49.7C42.8976 50.4 42.7676 51.0067 42.5076 51.52C42.2542 52.0267 41.8876 52.4167 41.4076 52.69C40.9342 52.9633 40.3742 53.1 39.7276 53.1C39.0809 53.1 38.5176 52.9633 38.0376 52.69C37.5576 52.4167 37.1876 52.0267 36.9276 51.52C36.6742 51.0067 36.5476 50.4 36.5476 49.7C36.5476 49 36.6742 48.3967 36.9276 47.89C37.1876 47.3767 37.5576 46.9833 38.0376 46.71C38.5176 46.4367 39.0809 46.3 39.7276 46.3ZM39.7276 47.43C39.1676 47.43 38.7342 47.6267 38.4276 48.02C38.1276 48.4067 37.9776 48.9667 37.9776 49.7C37.9776 50.4333 38.1276 50.9967 38.4276 51.39C38.7342 51.7767 39.1676 51.97 39.7276 51.97C40.2809 51.97 40.7076 51.7767 41.0076 51.39C41.3142 50.9967 41.4676 50.4333 41.4676 49.7C41.4676 48.9667 41.3142 48.4067 41.0076 48.02C40.7076 47.6267 40.2809 47.43 39.7276 47.43ZM51.1497 51.89V53H46.2897V46.4H47.6697V51.89H51.1497ZM59.1555 51.89V53H54.2955V46.4H55.6755V51.89H59.1555ZM69.6639 46.4C70.6972 46.4 71.4972 46.6867 72.0639 47.26C72.6306 47.8333 72.9139 48.6467 72.9139 49.7C72.9139 50.7533 72.6306 51.5667 72.0639 52.14C71.4972 52.7133 70.6972 53 69.6639 53H67.1139V46.4H69.6639ZM69.5939 51.9C70.2206 51.9 70.6906 51.7133 71.0039 51.34C71.3239 50.96 71.4839 50.4133 71.4839 49.7C71.4839 48.9867 71.3239 48.4433 71.0039 48.07C70.6906 47.69 70.2206 47.5 69.5939 47.5H68.4939V51.9H69.5939ZM79.1514 46.3C79.7981 46.3 80.3581 46.4367 80.8314 46.71C81.3114 46.9833 81.6781 47.3767 81.9314 47.89C82.1914 48.3967 82.3214 49 82.3214 49.7C82.3214 50.4 82.1914 51.0067 81.9314 51.52C81.6781 52.0267 81.3114 52.4167 80.8314 52.69C80.3581 52.9633 79.7981 53.1 79.1514 53.1C78.5047 53.1 77.9414 52.9633 77.4614 52.69C76.9814 52.4167 76.6114 52.0267 76.3514 51.52C76.0981 51.0067 75.9714 50.4 75.9714 49.7C75.9714 49 76.0981 48.3967 76.3514 47.89C76.6114 47.3767 76.9814 46.9833 77.4614 46.71C77.9414 46.4367 78.5047 46.3 79.1514 46.3ZM79.1514 47.43C78.5914 47.43 78.1581 47.6267 77.8514 48.02C77.5514 48.4067 77.4014 48.9667 77.4014 49.7C77.4014 50.4333 77.5514 50.9967 77.8514 51.39C78.1581 51.7767 78.5914 51.97 79.1514 51.97C79.7047 51.97 80.1314 51.7767 80.4314 51.39C80.7381 50.9967 80.8914 50.4333 80.8914 49.7C80.8914 48.9667 80.7381 48.4067 80.4314 48.02C80.1314 47.6267 79.7047 47.43 79.1514 47.43ZM88.4266 53H86.8366L84.9166 46.4H86.4066L87.6866 51.91L89.0066 46.4H90.3266L91.6666 51.91L92.9466 46.4H94.3666L92.4466 53H90.8966L89.9766 49.4L89.6666 47.84H89.6466L89.3366 49.4L88.4266 53ZM103.1 53H101.52L99.2103 49.12L98.6403 48.01H98.6303L98.6703 49.18V53H97.4303V46.4H99.0003L101.31 50.27L101.88 51.39H101.9L101.86 50.22V46.4H103.1V53Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_33_54"
                x="0.417114"
                y="0.499908"
                width="112.683"
                height="66.6001"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_33_54"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_33_54"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Box>
      </Box>

      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "bold" }}
          variant="h1"
          component="h2"
        >
          Find What You Need
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
          p: 2,
        }}
      >
        <img src={img1} alt="React Logo" />
        <ReactLogo />
        <img src={img2} alt="React Logo" />
        <img src={img3} alt="React Logo" />
      </Box>

      <Box
        width={"100%"}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontWeight: "bold" }}
          variant="h1"
          component="h2"
        >
          Highlights
        </Typography>
      </Box>
      <Box width={"100%"} ml={20}>
        <Typography variant="h4" sx={{fontSize: "20px", fontWeight: "bold"}}>House Adverts</Typography>
        <Divider></Divider>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 256,
          },
          p: 2,
        }}
      >
        
        {houseAdverts?.length === 0 ? <Typography>No House Adverts Found</Typography> : houseAdverts.map(houseAdvert => <HouseCard item={houseAdvert}/>)}
      </Box>
      <Box width={"100%"} ml={20}>
        <Typography variant="h4" sx={{fontSize: "20px", fontWeight: "bold"}}>Housemate Searching Adverts</Typography>
        <Divider></Divider>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 256,
          },
          p: 2,
        }}
      >
      {housemateSearchingAdverts?.length === 0 ? <Typography>No Housemate Searching Adverts Found</Typography> : housemateSearchingAdverts?.map(housemateSearchingAdvert => <HousemateSearchingAdvertCard item={housemateSearchingAdvert}/>)}
      </Box>
      <Box width={"100%"} ml={20}>
        <Typography variant="h4" sx={{fontSize: "20px", fontWeight: "bold"}}>Wanting To Be Housemate Adverts</Typography>
        <Divider></Divider>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 256,
          },
          p: 2,
        }}
      >
        {housemateWantingAdverts?.length === 0 ? <Typography>No Wanting To Be Housemate Adverts Found</Typography> : housemateWantingAdverts?.map(housemateWantingAdvert => <HousemateWantingAdvertCard item={housemateWantingAdvert}/>)}
      </Box>
      <Box width={"100%"} ml={20}>
        <Typography variant="h4" sx={{fontSize: "20px", fontWeight: "bold"}}>Belongings Advert</Typography>
        <Divider></Divider>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 256,
          },
          p: 2,
        }}
      >
      {belongingsAdverts?.length === 0 ? <Typography>No Belongings Adverts Found</Typography> : belongingsAdverts?.map(belongingsAdvert => <BelongingsCard item={belongingsAdvert}/>)}
      </Box>
      <Footer/>
    </>
  );
}
export default HomePage;
