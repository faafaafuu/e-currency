import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'

import AmountField from '../echange_fields/amount_gg_field/amount_field'

import './give_data.scss'

export default class Give_data extends Component {
    render() {
        return (
            <Container>
            <Box>
                <Typography className="gg_title" variant="h6" >Отдаёте</Typography>
            </Box> 
            <Box>
                <AmountField></AmountField>
            </Box>

            </Container>

        )
    }
}