import { H2, IconByName, Layout } from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  HStack,
  Text,
  VStack,
  Button,
  Actionsheet,
  Stack,
  Divider,
  Avatar,
  Pressable,
} from "native-base";

import ClassSectionCollapsibleCard from "../../components/Reports/AttendanceReports/ClassSectionCollapsibleCard";
import CalendarBar from "../../components/CalendarBar";

export default function AttendanceReportDashboard() {
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);
  const [teacherDetailModal, setTeacherDetailModal] = useState(false);
  const [calendarView, setCalendarView] = useState();
  const [weekPage, setWeekPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [weekDays, setWeekDays] = useState([]);

  const [teacherlist, setTeacherList] = useState([]);

  React.useEffect(() => {
    setTeacherList([
      {
        id: 1,
        name: "Rahul",
        class: "VI A",
      },
      {
        id: 2,
        name: "Rahul",
        class: "VI A",
      },
      {
        id: 3,
        name: "Rahul",
        class: "VI A",
      },
    ]);
  }, []);

  return (
    <Layout
      _header={{
        title: "Class I Attendance Reports",
        _heading: { color: "white" },
      }}
      _appBar={{
        languages: ["en"],
        isEnableSearchBtn: true,
      }}
      _footer={{
        menues: [
          {
            title: "HOME",
            icon: "Home4LineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "VISITS",
            icon: "GovernmentLineIcon",
            module: "Registry",
            route: "/my-visits",
            routeparameters: {},
          },
          {
            title: "LEARNING",
            icon: "LightbulbFlashLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "MATERIALS",
            icon: "BookOpenLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "PROFILE",
            icon: "UserLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
        ],
      }}
    >
      <Box p={6}>
        <VStack space={6}>
          <Box>
            <HStack
              space="4"
              justifyContent="space-between"
              alignItems="center"
            >
              <CalendarBar
                view={calendarView}
                setPage={setWeekPage}
                page={weekPage}
                _box={{ p: 0, bg: "transparent" }}
              />
              <Stack>
                <Button
                  rightIcon={
                    <IconByName name="ArrowDownSLineIcon" isDisabled />
                  }
                  onPress={(e) => setShowModal(true)}
                >
                  <>
                    {calendarView === "month"
                      ? t("MONTH VIEW")
                      : calendarView === "week"
                      ? t("WEEK VIEW")
                      : t("TODAY VIEW")}
                  </>
                </Button>
                <Actionsheet
                  isOpen={showModal}
                  _backdrop={{ opacity: "0.9", bg: "#ccc" }}
                >
                  <Actionsheet.Content p="0" alignItems={"left"} bg={"#ccc"}>
                    <HStack justifyContent={"space-between"}>
                      <Stack p={5} pt={2} pb="25px">
                        <H2>{t("SELECT_VIEW")}</H2>
                      </Stack>
                      <IconByName
                        name="CloseCircleLineIcon"
                        onPress={(e) => setShowModal(false)}
                      />
                    </HStack>
                  </Actionsheet.Content>

                  <Box w="100%" bg={"white"}>
                    {[
                      { name: t("TODAY_VIEW"), value: "day" },
                      { name: t("WEEK_VIEW"), value: "week" },
                      { name: t("MONTH_VIEW"), value: "monthInDays" },
                      { name: t("CHOOSE_DATE"), value: "date" },
                    ].map((item, index) => {
                      return (
                        <Pressable
                          key={index}
                          p="5"
                          borderBottomWidth={1}
                          borderBottomColor={"coolGray.500"}
                          onPress={(e) => {
                            setCalendarView(item.value);
                            setShowModal(false);
                          }}
                        >
                          <Text>{item.name}</Text>
                        </Pressable>
                      );
                    })}
                  </Box>
                </Actionsheet>
              </Stack>
            </HStack>
          </Box>
          <VStack space={6}>
            <ClassSectionCollapsibleCard />
            <ClassSectionCollapsibleCard />
            <ClassSectionCollapsibleCard />
          </VStack>
        </VStack>
      </Box>

      <Actionsheet
        isOpen={teacherDetailModal}
        onClose={() => setTeacherDetailModal(false)}
      >
        <Actionsheet.Content alignItems={"left"} bg="#E0DFF6">
          <HStack justifyContent={"space-between"} alignItems="center">
            <Stack p={5} pt={2} pb="15px">
              <Box>
                <HStack alignItems="center" space={3}>
                  <Avatar
                    size="48px"
                    borderRadius="md"
                    source={{
                      uri: "https://via.placeholder.com/50x50.png",
                    }}
                  />
                  <VStack>
                    <Text
                      color="coolGray.800"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      bold
                    >
                      Rahul
                    </Text>
                    <Text color="gray.400" fontSize={"xs"}>
                      Class Teacher: VI A
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </Stack>
            <Stack pb="15px">
              <IconByName
                name="CloseCircleLineIcon"
                color={"#6461D2"}
                onPress={() => setTeacherDetailModal(false)}
              />
            </Stack>
          </HStack>
        </Actionsheet.Content>
        <Box w="100%" p={4} justifyContent="center" bg="white">
          <VStack space={6}>
            <Text bold>Assistant Officer</Text>
            <Box>
              <Text>Qualification</Text>
              <Text>B.Com. Hons</Text>
            </Box>
            <Box>
              <Text>Phone</Text>
              <Text>+91 1234 567 890</Text>
            </Box>
            <Box>
              <Text>Date of Joining</Text>
              <Text>10 Aug, 2013</Text>
            </Box>
          </VStack>
        </Box>
      </Actionsheet>
    </Layout>
  );
}
