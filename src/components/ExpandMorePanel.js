import { Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Typography } from '@mui/material'
import { useState } from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const ExpandMorePanel = ( {question, answer} ) => {
    const [expanded, setExpanded] = useState(false);

    return (

        <Card variant="outlined" sx={{ display: { md: 'flex', lg: 'flex', xl: 'flex' }, }} >
            <CardHeader sx={{ minWidth: 220, display: 'flex' }}
                title={question}
            />
            <CardActions disableSpacing sx={{ display: 'flex' }} >
                <ExpandMore
                    expand={expanded}
                    onClick={event => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ p: 5 }} paragraph>
                        {answer}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    )
}

ExpandMorePanel.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
};
