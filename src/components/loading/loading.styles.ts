import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

export const componentStyles = (theme: Theme) => createStyles({
    loading_main: {
        width: "100%",
        maxWidth: 600,
        padding: 8,
        margin: "24px auto",
        [theme.breakpoints.down('xs')]: {
            margin: "16px",

        },
        border: "2px solid white",
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,0.75)"
    },
    title: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: 24,
        [theme.breakpoints.up("sm")]: {
            fontSize: 36,

        },
        color: "#4f4f4f",
        textAlign: "center"
    },
    loadingCircle: {
        height: "300px !important",
        width: "300px !important",
        borderRadius: 200,
        margin: "auto",
        color: "#60c67f"
    },
    base_circle: {
        height: "300px !important",
        width: "300px !important",
        borderRadius: 200,
        margin: "auto",
        position: "absolute",
        color: "#fb7563"
    },
    percent_textContainer: {
        height: "300px !important",
        width: "300px !important",
        borderRadius: 200,
        margin: "auto",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loaderContainer: {
        position: "relative",
        padding: 6,
        display: "flex",
        justifyContent: "center"
    },
    startButton: {
        width: "100%",
        "fontWeight": 900,
        fontFamily: "'Nunito', sans-serif",
        fontSize: 20,
        "&:hover": {
            transform: "scale(1.02)",
            boxShadow: '0px 2px 3.5px 0 rgba(53, 126, 168, 0.56), 0px 7.5px 12.5px 0 rgba(76, 141, 186, 0.6), inset 0px -1px 1px 0 rgba(255, 255, 255, 0.2), inset 0px -4.5px 4.5px 0 rgba(36, 114, 13, 0.28)',
        },
        backgroundImage: 'linear-gradient(to top, #63b92a, #afd60f)',
        borderRadius: 8
    },

    pauseButton: {
        width: "100%",
        fontFamily: "'Nunito', sans-serif",
        "fontWeight": 900,
        fontSize: 20,
        borderRadius: 8,
        "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0px 2px 3.5px 0 rgba(168, 53, 53, 0.56), 0px 7.5px 12.5px 0 rgba(186, 76, 86, 0.6), inset 0px -1px 1px 0 rgba(255, 255, 255, 0.2), inset 0px -4.5px 4.5px 0 rgba(36, 114, 13, 0.28)",
        },
        backgroundImage: "linear-gradient(to top, rgb(232, 48, 48), rgb(255, 129, 108))"
    },
    resetButton: {
        width: "100%",
        fontFamily: "'Nunito', sans-serif",
        "fontWeight": 900,
        fontSize: 20,
        backgroundColor: "#20a5ff",
        "&:hover": {
            backgroundColor: "#0092f5  !important",

        },
        borderRadius: 8,
    },
    percent_text: {
        position: 'absolute',
        fontFamily: "'Nunito', sans-serif",
        color: "#4f4f4f"
    },
    footer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Nunito', sans-serif",
        "fontWeight": 900,
        fontSize: 20,
        margin: "auto"
    }

})