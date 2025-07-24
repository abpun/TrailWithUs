import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import Text from "../common/text";

interface ScanStatusProps {
  value: number;
  maxValue: number;
  size?: number;
  thickness?: number;
  color?: string | string[]; // Now accepts either single color or gradient colors
  trackColor?: string;
  label?: string;
  showValue?: boolean;
  showPercentage?: boolean;
  animationDuration?: number;
}

const ScanStatus: React.FC<ScanStatusProps> = ({
  value,
  maxValue,
  size = 120,
  thickness = 10,
  color = "#3b82f6", // Default color or can be array for gradient
  trackColor = "#e5e7eb",
  label,
  showValue = true,
  showPercentage = true,
  animationDuration = 800,
}) => {
  const progress = Math.max(0, Math.min(value / maxValue, 1));
  const percentage = Math.round(progress * 100);
  
  // Generate a unique ID for the gradient
  const gradientId = React.useId();
  
  // Prepare chart data
  const chartData = [
    {
      name: "progress",
      value: progress,
      fill: Array.isArray(color) ? `url(#${gradientId})` : color,
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-2">
      <div style={{ width: size, height: size }} className="relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={`${100 - thickness}%`}
            outerRadius="100%"
            barSize={thickness}
            data={chartData}
            startAngle={90}
            endAngle={-270}
          >
            {/* Define gradient if color is an array */}
            {Array.isArray(color) && (
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
                  {color.map((c, i) => (
                    <stop 
                      key={i} 
                      offset={`${(i / (color.length - 1)) * 100}%`} 
                      stopColor={c} 
                    />
                  ))}
                </linearGradient>
              </defs>
            )}
            
            <PolarAngleAxis
              type="number"
              domain={[0, 1]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              dataKey="value"
              cornerRadius={size / 2}
              animationDuration={animationDuration}
              animationEasing="ease-out"
              background={{ fill: trackColor }}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-bold"
              style={{
                fontSize: `${size * 0.2}px`,
                color: "#000000", // Force black color for the value text
              }}
            >
              {showPercentage ? `${percentage}%` : value}
            </span>
          </div>
        )}
      </div>

      {label && (
        <Text className="w-full text-sm font-medium text-gray-600 text-center">
          {label}
        </Text>
      )}
    </div>
  );
};

export default ScanStatus;