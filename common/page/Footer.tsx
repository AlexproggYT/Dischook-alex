import React from "react"
import { useIntl } from "react-intl"
import styled from "styled-components"
import { monochromeLogo } from "../../icons/logo"

const Container = styled.footer`
  margin: 16px;
  padding: 96px 0;

  border-top: 1px solid ${({ theme }) => theme.backgroundModifier.accent};

  color: ${({ theme }) => theme.interactive.normal};
  font-size: 16px;
`

const BrandContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  & > svg {
    color: ${({ theme }) => theme.interactive.hover};

    width: 24px;
    height: 24px;

    margin-right: 16px;
  }
`

const BrandName = styled.h4`
  margin: 0;

  color: ${({ theme }) => theme.interactive.hover};
  font-size: 21px;
`

const Tagline = styled.p`
  margin: 0 0 20px;

  line-height: 1.375;
`

const Info = styled.p`
  margin: 0 0 4px;

  line-height: 1.375;
`

const NavigationList = styled.div`
  margin-bottom: 4px;
  display: flex;
  flex-flow: wrap;
`

const NavigationItem = styled.a`
  margin: 0 16px 8px 0;

  line-height: 1.5;
  color: inherit;

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.interactive.hover};
  }

  &:not(:disabled):focus {
    color: ${({ theme }) => theme.interactive.active};
  }
`

const LegalInfo = styled.p`
  margin: 0;
  font-size: 11px;
  line-height: 1.25;
`

export function Footer() {
  const intl = useIntl()

  return (
    <Container>
      <BrandContainer>
        {monochromeLogo}
        <BrandName>
          {intl.formatMessage({
            defaultMessage: "Discohook",
            description: "product name",
          })}
        </BrandName>
      </BrandContainer>
      <Tagline>
        {intl.formatMessage({
          defaultMessage:
            "The easiest way to build and send Discord messages with embeds using webhooks.",
          description: "product tagline",
        })}
      </Tagline>
      <Info>
        {intl.formatMessage({
          defaultMessage: "Email: ''hello'' at discohook.app",
          description: "contact email in footer",
        })}
      </Info>
      <NavigationList>
        <NavigationItem href="/discord" target="_blank">
          {intl.formatMessage({
            defaultMessage: "Discord Support Server",
            description: "discord server invite link in footer",
          })}
        </NavigationItem>
        <NavigationItem href="/bot" target="_blank">
          {intl.formatMessage({
            defaultMessage: "Discord Bot",
            description: "discord bot invite link in footer",
          })}
        </NavigationItem>
        <NavigationItem href="https://git.io/discohook" target="_blank">
          {intl.formatMessage({
            defaultMessage: "Source Code",
            description: "source code link in footer",
          })}
        </NavigationItem>
        <NavigationItem href="https://patreon.com/discohook" target="_blank">
          {intl.formatMessage({
            defaultMessage: "Support Discohook",
            description: "donation link in footer",
          })}
        </NavigationItem>
      </NavigationList>
      <LegalInfo>
        {intl.formatMessage({
          defaultMessage:
            "© 2020 The Discohook Authors. Discohook is not affiliated with Discord.",
          description: "copyright notice and affiliation disclaimer in footer",
        })}
      </LegalInfo>
      <LegalInfo>
        {intl.formatMessage(
          {
            defaultMessage:
              "This website is made available under the terms of the {license} license.",
            description: "license notice in footer",
          },
          { license: "GNU AGPLv3" },
        )}
      </LegalInfo>
    </Container>
  )
}
