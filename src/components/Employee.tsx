import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@material-ui/core';
// import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: theme.spacing(81),
	},
}));

interface EmployeeProps {
	listMasterDataResult: any;
}

const Employee = (props: EmployeeProps) => {
	const { listMasterDataResult } = props;
	const { t } = useTranslation();
	const classes = useStyles();
	// console.log(listMasterDataResult);

	return (
		<Box>
			<Typography variant='h4' color='primary'>
				{`Employee Details - ${t('AppName')}`}
			</Typography>
			{Boolean(listMasterDataResult) && listMasterDataResult.length ? (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Key</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{Boolean(listMasterDataResult) &&
								listMasterDataResult.length &&
								listMasterDataResult.map((row: any) => (
									<TableRow key={row.name}>
										<TableCell component='th' scope='row'>
											{row.name}
										</TableCell>
										<TableCell>{row.key}</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<Fragment></Fragment>
			)}
		</Box>
	);
};

// const mapStateToProps = (state) => {
// 	return {
// 		...state.commonReducer,
// 	};
// };
// const mapDispatchToProps = (dispatch) => ({
// 	showLoader: (data) => dispatch(showLoader(data)),
// 	getMasterData: (data) => dispatch(getMasterData(data)),
// });
export default Employee;
