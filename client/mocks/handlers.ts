import { rest } from "msw";
import { env } from "@/env.mjs";

export const handlers = [
  rest.get(
    `${env.NEXT_PUBLIC_BASE_API_URL}/ohmvaluecalculator/electroniccolorcodes`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.body(
          JSON.stringify([
            {
              _id: "651b506d588716176aaa4a88",
              name: "Black",
              colorHex: "#0E0E10",
              code: "BK",
              ral: 9005,
              significantFigure: 0,
              multiplier: 1,
              temperatureCoefficient: 250,
              temperatureLetter: "U",
            },
            {
              _id: "651b506d588716176aaa4a8e",
              name: "Blue",
              colorHex: "#007CB0",
              code: "BU",
              ral: 5015,
              significantFigure: 6,
              multiplier: 1000000,
              tolerancePercent: 0.25,
              toleranceLetter: "C",
              temperatureCoefficient: 10,
              temperatureLetter: "Z",
            },
            {
              _id: "651b506d588716176aaa4a89",
              name: "Brown",
              colorHex: "#7E4B26",
              code: "BN",
              ral: 8003,
              significantFigure: 1,
              multiplier: 10,
              tolerancePercent: 1,
              toleranceLetter: "F",
              temperatureCoefficient: 100,
              temperatureLetter: "S",
            },
            {
              _id: "651b506d588716176aaa4a87",
              name: "Gold",
              colorHex: "#FFD700",
              code: "GD",
              multiplier: 0.1,
              tolerancePercent: 5,
              toleranceLetter: "J",
            },
            {
              _id: "651b506d588716176aaa4a90",
              name: "Gray",
              colorHex: "#7A888E",
              code: "GY",
              ral: 7000,
              significantFigure: 8,
              multiplier: 100000000,
              tolerancePercent: 0.01,
              toleranceLetter: "L (A)",
              temperatureCoefficient: 1,
              temperatureLetter: "K",
            },
            {
              _id: "651b506d588716176aaa4a8d",
              name: "Green",
              colorHex: "#61993B",
              code: "GN",
              ral: 6018,
              significantFigure: 5,
              multiplier: 100000,
              tolerancePercent: 0.5,
              toleranceLetter: "D",
              temperatureCoefficient: 20,
              temperatureLetter: "Z",
            },
            {
              _id: "651b506d588716176aaa4a84",
              name: "None",
              colorHex: "#F8F9FA",
              multiplier: 0,
              tolerancePercent: 20,
              toleranceLetter: "M",
            },
            {
              _id: "651b506d588716176aaa4a8b",
              name: "Orange",
              colorHex: "#F67828",
              code: "OG",
              ral: 2003,
              significantFigure: 3,
              multiplier: 1000,
              tolerancePercent: 0.05,
              toleranceLetter: "W",
              temperatureCoefficient: 15,
              temperatureLetter: "P",
            },
            {
              _id: "651b506d588716176aaa4a85",
              name: "Pink",
              colorHex: "#D8A0A6",
              code: "PK",
              ral: 3015,
              multiplier: 0.001,
            },
            {
              _id: "651b506d588716176aaa4a8a",
              name: "Red",
              colorHex: "#A72920",
              code: "RD",
              ral: 3000,
              significantFigure: 2,
              multiplier: 100,
              tolerancePercent: 2,
              toleranceLetter: "G",
              temperatureCoefficient: 50,
              temperatureLetter: "R",
            },
            {
              _id: "651b506d588716176aaa4a86",
              name: "Silver",
              colorHex: "#C0C0C0",
              code: "SR",
              multiplier: 0.01,
              tolerancePercent: 10,
              toleranceLetter: "K",
            },
            {
              _id: "651b506d588716176aaa4a8f",
              name: "Violet",
              colorHex: "#76689A",
              code: "VT",
              ral: 4005,
              significantFigure: 7,
              multiplier: 10000000,
              tolerancePercent: 0.1,
              toleranceLetter: "B",
              temperatureCoefficient: 5,
              temperatureLetter: "M",
            },
            {
              _id: "651b506d588716176aaa4a91",
              name: "White",
              colorHex: "#e3d9c6",
              code: "WH",
              ral: 1013,
              significantFigure: 9,
              multiplier: 1000000000,
            },
            {
              _id: "651b506d588716176aaa4a8c",
              name: "Yellow",
              colorHex: "#F6B600",
              code: "YE",
              ral: 1021,
              significantFigure: 4,
              multiplier: 10000,
              tolerancePercent: 0.02,
              toleranceLetter: "P",
              temperatureCoefficient: 25,
              temperatureLetter: "Q",
            },
          ])
        )
      );
    }
  ),
  rest.post(
    `${env.NEXT_PUBLIC_BASE_API_URL}/ohmvaluecalculator`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.body(
          JSON.stringify({
            result: 0,
          })
        )
      );
    }
  ),
];
