import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import CoinList from '../coin_list/coin_list'
import ReciveInput from '../input_fields/recive_input'
import './recive_data.scss'

const Recive_data = ({coin_data} = []) => {
    return (
        <Container>
            <Box>
                <Typography className="gg_title" variant="h6" >Получаете</Typography>
            </Box>
            <Box>
                <ReciveInput am_coins_data={coin_data}/>
                <CoinList className="recive_wrap" cl_coins_data={coin_data}/>
            </Box>
            <Box>
                
            </Box>
        </Container>

    )

}

export default Recive_data