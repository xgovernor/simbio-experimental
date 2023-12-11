"use client";
import {
  SelectTabData,
  SelectTabEvent,
  TabValue,
} from "@fluentui/react-components";
import {
  LocalLanguage24Filled,
  ChatHelp24Regular,
  PersonAccounts24Regular,
  ShieldLock24Regular,
  EyeTracking24Filled,
  PaintBrush24Regular,
  PhoneLaptop24Regular,
  Alert24Regular,
  Accessibility24Regular,
} from "@fluentui/react-icons";
import { SettingsMenuTabType } from "@/types";
import { FC, memo, useState } from "react";
import { Settings24Regular } from "@fluentui/react-icons";
import SettingsLayout from "@/components/settings/SettingsLayout";
import Layout from "@/components/ui/Layout";
import SettingsAccount from "@/components/settings/SettingsAccount";
import SettingsLanguageAndDate from "@/components/settings/SettingsLanguageAndDate";
import SettingsAppearance from "@/components/settings/SettingsAppearance";
import SettingsNotification from "@/components/settings/SettingsNotification";
import SettingsAccessibility from "@/components/settings/SettingsAccessibility";
import SettingsDevice from "@/components/settings/SettingsDevice";
import SettingsSecurity from "@/components/settings/SettingsSecurity";
import SettingsPrivacy from "@/components/settings/SettingsPrivacy";
import SettingsHelp from "@/components/settings/SettingsHelp";

export type PageConfig = {
  analytics?: boolean;
  settings?: boolean;
  data?: boolean;
};

interface PageRootComponentPropsType {
  page: string;
  data: any;
  config: PageConfig;
}

export const BREADCRUMB_MENU = [
  {
    title: "Home",
    url: "/dashboard",
  },
  {
    title: "Settings",
  },
];

const PageRootComponent: FC<PageRootComponentPropsType> = ({
  data,
  page,
}: PageRootComponentPropsType) => {
  const [selectedValue, setSelectedValue] = useState<TabValue>(page);
  // const route = useRouter();
  const TABS: SettingsMenuTabType[] = [
    {
      id: "account",
      name: "Account",
      icon: <PersonAccounts24Regular />,
      component: <SettingsAccount />,
    },
    {
      id: "language&date",
      name: "Language & Date",
      icon: <LocalLanguage24Filled />,
      component: (
        <SettingsLanguageAndDate
          timeFormats={data.timeFormats}
          dateFormats={data.dateFormats}
          timeZones={data.timeZones}
          language={data.language}
        />
      ),
    },
    {
      id: "appearance",
      name: "Appearance",
      icon: <PaintBrush24Regular />,
      component: <SettingsAppearance />,
    },
    {
      id: "notification",
      name: "Notification",
      icon: <Alert24Regular />,
      component: <SettingsNotification />,
    },
    {
      id: "accessibility",
      name: "Accessibility",
      icon: <Accessibility24Regular />,
      component: <SettingsAccessibility />,
    },
    {
      id: "device",
      name: "Device",
      icon: <PhoneLaptop24Regular />,
      component: <SettingsDevice />,
    },
    {
      id: "security",
      name: "Security",
      icon: <ShieldLock24Regular />,
      component: <SettingsSecurity />,
    },
    {
      id: "privacy",
      name: "Privacy and data",
      icon: <EyeTracking24Filled />,
      component: <SettingsPrivacy />,
    },
    {
      id: "help",
      name: "Help",
      icon: <ChatHelp24Regular />,
      component: <SettingsHelp />,
    },
  ];

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
    // route.push(`/settings?page=${data.value}`);
  };

  return (
    <Layout
      breadcrumb={BREADCRUMB_MENU}
      title="Settings"
      icon={<Settings24Regular />}
    >
      <SettingsLayout
        tabs={TABS}
        selectedValue={selectedValue}
        onTabSelect={onTabSelect}
      >
        {TABS.filter((tab) => tab.id === selectedValue)[0].component}
      </SettingsLayout>
    </Layout>
  );
};

export default memo(PageRootComponent);
