---
to: <%= outDir %>/atoms/<%= name %>.<%= language %>
---
import { Button as ButtonAtom } from '@beenary/react-atoms';
import styled from '<%= styleLib %>';

const ButtonBase = styled(ButtonAtom)`
  padding: 4px;
  min-width: 100px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
`

export const ButtonSolid = styled(ButtonBase)`
  background-color: #eee;
  color: #222;
`
export const ButtonOutlined = styled(ButtonBase)`
  background-color: transparent;
  color: #222;
  border: 2px solid #ddd;
`

export const <%= Name %> = ButtonSolid
