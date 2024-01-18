import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Circle, Line } from "react-native-svg"; // Import Circle from react-native-svg

export default function InteractiveChart() {
  const data = [
    { x: "1 Jan", y: 18 },
    { x: "10 Jan", y: 9 },
    { x: "15 Jan", y: 20 },
    { x: "20 Jan", y: 40 },
    { x: "25 Jan", y: 2 },
    { x: "31 Jan", y: 23 },
  ];

  const [tooltipData, setTooltipData] = useState<number | null>(data[0].y);

  const [activePoint, setActivePoint] = useState<number>(0);

  const handleDataPointClick = (data: {
    index: number;
    value: number;
    x: number;
    y: number;
  }) => {
    const { index, value } = data;
    setTooltipData(value);
    setActivePoint(index);
  };

  const widthW = Dimensions.get("window").width;

  return (
    <>
      <View className="self-start">
        <Text className="font-poppinsSemiBold text-neutral-1">Insights</Text>
        {tooltipData && (
          <View className="flex-row items-end space-x-1">
            <Text className="text-primary-1 text-2xl">{tooltipData}</Text>
            <Text className="font-poppinsSemiBold text-xs text-text-default">
              USD
            </Text>
          </View>
        )}
      </View>

      <View>
        <LineChart
          onDataPointClick={handleDataPointClick}
          data={{
            labels: data.map((item) => item.x),
            datasets: [
              {
                data: data.map((item) => item.y),
              },
            ],
          }}
          width={widthW + widthW / (data.length - 1)}
          height={170}
          withVerticalLines={false}
          withHorizontalLabels={false}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            propsForLabels: {
              fontWeight: "600",
              fontSize: 12,
            },
            color: () => "#1573FF",
            labelColor: () => "#CACACA",
            propsForBackgroundLines: {
              stroke: "#EBECF1",
            },
            propsForDots: {
              fill: "transparent",
            },
          }}
          bezier
          style={{ paddingLeft: 10 }}
          renderDotContent={({ x, y, index }) => {
            if (activePoint === index) {
              return (
                <React.Fragment key={index + x + y}>
                  <Circle
                    cx={x}
                    cy={y}
                    r="6"
                    strokeWidth="2"
                    stroke="#1573FF"
                    fill="#fff"
                  />
                  <Line
                    x1={x}
                    y1={0}
                    x2={x}
                    y2={170}
                    stroke="#1573FF"
                    strokeDasharray={[5, 5]}
                  />
                </React.Fragment>
              );
            } else {
              return null;
            }
          }}
        />
      </View>
    </>
  );
}
