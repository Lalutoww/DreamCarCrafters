import styles from './ErrorBoundary.module.css'

import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
    }

    render() {
        if (this.state.hasError) {
            return(
            <div className={styles['error-boundary']}>
            <img src="../../../public/img/error.png" alt="404 Not Found"/>
            <h1><span className={styles['text-overflow-center']}>Something went wrong....</span></h1>
            <a href='/'>Click here to get back to the home page</a>
        </div>);
        }

        return this.props.children;
    }
}