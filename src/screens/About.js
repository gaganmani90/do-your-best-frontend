import { Accordion } from 'react-bootstrap'

const About = () => {
  return (
      <>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="-1">
                  <Accordion.Header>Measure your satisfaction like you measure body weight</Accordion.Header>
                  <Accordion.Body>
                      Like we measure our body weight on absolute scale, <strong>Do Your Best tool</strong> provides you a way to measure your
                      satisfaction level.
                      Score between 0-100 that you give to yourself at the end of the day. This is to reflect on your day
                      before sleep, take notes and be ready for the next one. This is like a journal entry but quantifiable.
                      Higher the score, better was your day.
                      We provide analytics that allows you to reflect on your past days and look through notes. As compared
                      to a journal, Do Your Best makes it very easy by just one click.
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="0">
                  <Accordion.Header>Life is about habits</Accordion.Header>
                  <Accordion.Body>
                      Have you ever wondered why some people creates a huge impact on the world in 60 years while
                      many could not in 100 years ? The answer is - most successful people are proactive about life
                      choices. They drive the day not the day drives them.
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                  <Accordion.Header>Life is short</Accordion.Header>
                  <Accordion.Body>
                      Has it ever happened to you that the entire year has gone and you did not achieve any of the
                      new year resolutions ? I am pro fun but overdose of anything is likely to result in high
                      dissatisfaction. Hence, it is important to make your day count so that you can make your life count.
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
      </>
  )
}

export default About
