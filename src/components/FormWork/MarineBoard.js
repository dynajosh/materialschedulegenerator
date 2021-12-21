import React, {useState} from "react"
import '../../styles/styles.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const MarineBoard = () =>{
    const [open, setOpen] = useState(false);
    const [area, setArea] = useState(0);
    const [numberOfBoards, setNumberOfBoards] = useState(0);
    const [numberOfProps, setNumberOfProps] = useState(0);
    const [boardPrice, setBoardPrice] = useState(0);
    const [propsPrice, setPropsPrice] = useState(0);
    const [boardAmount, setBoardAmount] = useState(0);
    const [propsAmount, setPropsAmount] = useState(0);

    const formworkButton = () => {
        setNumberOfBoards(area/1.44)
        setNumberOfProps(area*2.5)
        setBoardAmount(numberOfProps*boardPrice)
        setPropsAmount(numberOfProps*propsPrice)
    }


    return(
        <>
        <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align=""></TableCell>
            <TableCell align=""></TableCell>
            <TableCell align=""></TableCell>
            <TableCell align=""></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell align="">Area</TableCell>
            <TableCell align=""><input type="text" className="text-input-field" className="text-input-field" onChange={(e)=>setArea(e.target.value)}/></TableCell>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Component</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Unit cost</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Marine Boards</TableCell>
                            <TableCell>{numberOfBoards}</TableCell>
                            <TableCell>Nr</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="3700" value={boardPrice} onChange={(e)=>setBoardPrice(e.target.value)}/></TableCell>
                            <TableCell>{boardAmount}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>50mm by 75mm props</TableCell>
                            <TableCell>{numberOfProps}</TableCell>
                            <TableCell>Nr</TableCell>
                            <TableCell><input type="text" className="text-input-field" placeholder="4000" value ={propsPrice} onChange={(e)=>setPropsPrice(e.target.value)} /></TableCell>
                            <TableCell>{propsAmount}</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>
            </TableRow>
        </TableBody>
      </Table>
      <button className="calculate-button" onClick={formworkButton}>Ca;lculate</button>
    </TableContainer>
    </>
    )
}

export default MarineBoard;