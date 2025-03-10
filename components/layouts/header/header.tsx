import React, {FunctionComponent, useState} from "react";
import {Box, Container, Grid} from "@mui/material";
import styles from "./header.module.css";
import classNames from "classnames";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import {LoginButton} from "../../buttons";
import headerLogo from "../../../public/headerLogo.png";
import Image from "next/image";
import Search from "../../search/Search"
import SearchModal from "../../modals/search-modal/SearchModal";


interface Props {
    index: number;
}

export const Header: FunctionComponent<Props> = ({index}) => {
    const [searchToggle, setSearchToggle] = useState(false)

    return (
        <Box className={styles.background}>
            <Container sx={{
                display: 'flex'
            }}>
                <Grid container columnSpacing={0} height='80px' paddingLeft={0} paddingRight={0} columns={16}>
                    <Grid item xs={12} md={2}
                          sx={{display: 'flex', justifyContent: 'flex-start', height: 'inherit', alignItems: 'center'}}>
                        <Link href="/">
                            <Image className={styles.logo} src={headerLogo.src} width='140px' height='65px'/>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6}
                          sx={{display: 'flex', justifyContent: 'center', height: 'inherit', alignItems: 'center'}}>
                        <Box className={styles.linkContainer}>
                            <Typography textAlign='center'
                                        className={classNames(styles.panelLink, index===0 && styles.selected, 'bold16')}>
                                <Link href="/catalog">
                                    Catalog
                                </Link>
                            </Typography>
                            <Typography textAlign='center'
                                        className={classNames(styles.panelLink, index===1 && styles.selected, 'bold16')}>
                                <Link href="/payments/invoices">
                                    Payments
                                </Link>
                            </Typography>
                            <Typography textAlign='center'
                                        className={classNames(styles.panelLink, index === 2 && styles.selected, 'bold16')}>
                                <Link href="/swap">
                                    Swap
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}
                          sx={{display: 'flex', justifyContent: 'flex-end', height: 'inherit', alignItems: 'center'}}>
                        <Search searchToggle={searchToggle} setSearchToggle={setSearchToggle}/>
                        {searchToggle && <SearchModal searchToggle={searchToggle} setSearchToggle={setSearchToggle}/>}
                    </Grid>
                    <Grid item xs={12} md={3}
                          sx={{display: 'flex', justifyContent: 'flex-end', height: 'inherit', alignItems: 'center'}}>
                        <LoginButton/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};