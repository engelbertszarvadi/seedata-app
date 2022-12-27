import { Box } from "@mui/material";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { styles as classes } from "./styles";

//TO DO: To be changed to data from table
const measuredTime: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40];

const dataSet: object[] = [
  {
    xAxisTickName: measuredTime[0],
    measurement: 0,
  },
  {
    xAxisTickName: measuredTime[1],
    measurement: 10,
  },
  {
    xAxisTickName: measuredTime[2],
    measurement: 20,
  },
  {
    xAxisTickName: measuredTime[3],
    measurement: 10,
  },
  {
    xAxisTickName: measuredTime[4],
    measurement: 5,
  },
  {
    xAxisTickName: measuredTime[5],
    measurement: 10,
  },
  {
    xAxisTickName: measuredTime[6],
    measurement: 20,
  },
  {
    xAxisTickName: measuredTime[7],
    measurement: 10,
  },
  {
    xAxisTickName: measuredTime[8],
    measurement: 0,
  },
];

export const GenerateReportsPage = () => {
  return (
    <div style={classes.main}>
      <Box sx={classes.box}>
        <ResponsiveContainer width="90%" height="90%">
          <AreaChart
            width={500}
            height={300}
            data={dataSet}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="customGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="xAxisTickName" />
            <YAxis />
            <Area
              type="monotone"
              dataKey="measurement"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#customGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};
