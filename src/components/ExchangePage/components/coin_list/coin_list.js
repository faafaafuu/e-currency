










// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// // import Select from '@material-ui/core/Select';

// import coins_data from '../coin_logo/coins_data'
// import CoinList from '../coin_list/coin_list'
// import './change_asset.scss'


// const useStyles = makeStyles((theme) => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing(2),
//   },
//   select: {
//     borderLeft: '1px solid black',
//   },
//   selectBg: {
//     backgroundColor: '#fff !important',
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   ticker: {
//     margin: 8,
//   },
//   chose_tic_btn: {
//     display: 'flex',
//   },
//   select_coins: {
//     display: 'flex',
//     flexDirection: 'column',
//   }

// }));


// export default function ControlledOpenSelect() {
//   const classes = useStyles();
//   const [coin, setCoin] = React.useState('');
//   const [open, setOpen] = React.useState(false);
//   const [coins, setCoins] = React.useState(coins_data)



//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const changeName = () => {
//     return console.log(2134)
//   }

//   return (
//     <div className={classes.select}>
//       <FormControl className={classes.formControl}>
//         <CoinList coins={coins} fns={open, coin, handleChange, handleClose, handleOpen, changeName}/>
//       </FormControl>
//     </div>
//   );
// }





// import React from 'react';
// import MenuItem from '@material-ui/core/MenuItem';
// import SvgIcon from '@material-ui/core/SvgIcon'
// import Select from '@material-ui/core/Select'

// export default function CoinList({coins, fns}) {
//     const {open, coin, handleClose, handleOpen, changeName} = fns
//     return (
//         <Select
//           labelId="demo-controlled-open-select-label"
//           id="demo-controlled-open-select"
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}

//           changeName={changeName}
//         >
//             {coins.map((coin) => {
//                 return (
//                 <MenuItem 
//                     value={coin.name} >
//                     <SvgIcon component={coin.logo}/>
//                     <p>{coin.name}</p>
//                 </MenuItem>
//                 )
//             })}
//         </Select>
//     )
// }