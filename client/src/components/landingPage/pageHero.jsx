import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons-react';
  import image from '../../assets/images/landingPage/hero_images/heroImage.jpg';

  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },

    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,

      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },

    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },

    image: {
      flex: 1,

      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },

    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },
  }));

  export function PageHero() {
    const { classes } = useStyles();
    return (
      <div>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                <span>Kenya</span> <span className={'text-primary'}>Home</span> <br /> Warranty
              </Title>
              <Text className='text-secondary' mt="md">
                Elevate your home and budget security with our comprehensive warranty plans.
                Experience unrivaled peace of mind and top-tier service from our seasoned professionals at Kenya Home Warranty.
                Your assurance of a protected and thriving home. Choose KHW today and embark on a journey of unparalleled 
                protection, personalized service, and the confidence that your home is in capable hands. Your peace of mind starts here.
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Convenience</b> – We are here to save you the hassle of dealing with expensive contractors who don’t care about the customers
                </List.Item>
                <List.Item>
                  <b>Expertise</b> – We have industry expertise in resolving home system glitches that often cause homeowners pain
                  any project
                </List.Item>
                <List.Item>
                  <b>Availability</b> – We have partnered with a pool of reliable contractors who are ready to resolve system issues on the go
                </List.Item>
                <List.Item>
                  <b>Customer-centricity</b> – We care about our customers, we want them to have peace of mind, save their time and financial resources
                </List.Item>
              </List>

              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  <a href="/authuser/signup" rel='noopener' className='text-white text-decoration-none'>Get started</a>
                </Button>
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                  <a href="/allservices" rel='noopener' className='text-black text-decoration-none'>Our Services</a>
                </Button>
              </Group>
            </div>
            <div className={`${classes.imageContainer} d-flex justify-content-center align-items-center`}>
                <Image src={image} className={classes.image} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
