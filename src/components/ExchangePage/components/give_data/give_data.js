import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'

import CoinList from '../coin_list/coin_list'
import EmailField from '../echange_fields/email_field/email_field'
import FioField from '../echange_fields/fio_field/fio_field'
import CardField from '../echange_fields/card_field/card_field'
// import AmountField from '../echange_fields/amount_gg_field/amount_field'
import GiveInput from '../input_fields/give_input'

import './give_data.scss'

const GiveData = ({coin_data}) => {
    return (
    <Container>
        <Box>
            <Typography className="gg_title" variant="h6" >Отдаёте</Typography>
        </Box> 
        <Box>
            <GiveInput  am_coins_data={coin_data}/>
        </Box>
        <Box>
            <FioField/>
            <CardField/>
            <EmailField/>
        </Box>
    </Container>
    )
}

export default GiveData