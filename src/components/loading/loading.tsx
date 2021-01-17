import React, { useState, useEffect } from 'react'
import { withStyles, WithStyles, Grid, Button, Box, CircularProgress } from '@material-ui/core'
import { componentStyles } from './loading.styles'

interface LoadingProps {
    onClick?: () => void
}

interface _LoadingProps extends LoadingProps, WithStyles<typeof componentStyles> { }

const _Loading: React.FC<_LoadingProps> = (props) => {
    const { classes, onClick } = props
    const [percentValue, setPercentValue] = useState<number>(0)
    const [isPaused, setIsPaused] = useState<boolean>(true)

    const setPercentValueFunc = () => {
        const newPercentValue = percentValue + 1
        if (percentValue < 100 && !isPaused) {
            setTimeout(() => {
                setPercentValue(newPercentValue)
            }, 500)
        }
    }

    useEffect(() => {
        setPercentValueFunc()
    }, [percentValue, isPaused])

    const onStart = () => {
        setIsPaused(false)
    }

    const onPause = () => {
        setIsPaused(true)
    }

    const onReset = () => {
        setIsPaused(true)
        //Resetting percentage to 0 using setTimeOut to handle percentValue set by setPercentValueFunc
        setTimeout(() => {
            setPercentValue(0)
        }, 500)
    }

    return <Grid container spacing={3} onClick={onClick} className={classes.loading_main}>
        <Grid item xs={12} className={classes.title}>
            PREPFULLY LOADING
        </Grid>
        <Grid item xs={12} className={classes.loaderContainer}>
            <Box className={classes.percent_textContainer}><h1 className={classes.percent_text}>{percentValue}%</h1></Box>
            <CircularProgress variant="determinate" value={100} className={classes.base_circle} />
            <CircularProgress variant="determinate" value={percentValue} className={classes.loadingCircle} />
        </Grid>
        <Grid item xs={6}>
            <Button
                variant="contained"
                color="primary"
                className={classes.startButton}
                onClick={onStart}>
                Start
                </Button>
        </Grid>
        <Grid item xs={6}>
            <Button
                variant="contained"
                color="secondary"
                className={classes.pauseButton}
                onClick={onPause}>
                Pause
                </Button>
        </Grid>
        <Grid item xs={12}>
            <Button
                variant="contained"
                color="primary"
                className={classes.resetButton}
                onClick={onReset}>
                Reset
                </Button>
        </Grid>
    </Grid>
}

export const Loading = withStyles(componentStyles)(_Loading)