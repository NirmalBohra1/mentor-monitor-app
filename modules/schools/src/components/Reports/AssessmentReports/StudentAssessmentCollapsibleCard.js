import React from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  Avatar,
  Divider,
  Spacer,
  Pressable,
  Button,
} from "native-base";
import {
  DEFAULT_THEME,
  H2,
  IconByName,
  Collapsible,
  ProgressBar,
} from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import RoundedProgressBar from "../../RoundedProgressBar";
import AssessmentScoreCard from "./AssessmentScoreCard";
// import AttendanceWeeklyCard from "./AttendanceWeekly Card";

function StudentAssessmentCollapsibleCard() {
  const { t } = useTranslation();
  const [progressData, setProgressData] = React.useState([
    {
      name: "22 Present",
      color: "#43B13A",
      value: 22,
    },
    {
      name: "4 Absent",
      color: "#DF5B5B",
      value: 4,
    },
    {
      name: "1 Unmarked",
      color: "#C1C0ED",
      value: 1,
    },
  ]);
  return (
    <Collapsible
      defaultCollapse={true}
      header={
        <Box py={4}>
          <VStack>
            <H2 fontWeight={600}>{t("Student Wise Assessment")}</H2>
            <HStack alignItems={"center"}>
              <Text color={"#373839"} fontSize={"xs"} fontWeight={400}>
                {t("20 Students")}{" "}
              </Text>
              <Text fontSize="5px" color="#373839" fontWeight={400}>
                {" "}
                ●{" "}
              </Text>
              <Text color="#373839" fontSize={"xs"} fontWeight={400}>
                {" "}
                {t("Max Score 25")}
              </Text>
            </HStack>
          </VStack>
        </Box>
      }
    >
      <Divider mb={4} />
      <VStack pt={6} space={4}>
        <Box>
          <VStack space={4}>
            <AssessmentScoreCard />
            <AssessmentScoreCard />
            <AssessmentScoreCard />

            <Box>
              <Button colorScheme="button" variant="outline" py={3}>
                {t("See all students")}
              </Button>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Collapsible>
  );
}
export default StudentAssessmentCollapsibleCard;
