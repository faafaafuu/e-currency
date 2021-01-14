import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


import AmountField from '../echange_fields/amount_gg_field/amount_field'

import './recive_data.scss'

export default class Recive_data extends Component {
    render() {
        return (
            <Container>
                <Box>
                    <Typography className="gg_title" variant="h6" >Получаете</Typography>
                </Box>
                <Box>
                    <AmountField></AmountField>
                </Box>
                <Box>
                    
                </Box>
            </Container>

        )
    }
}