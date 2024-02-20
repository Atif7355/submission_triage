-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Apr 25, 2023 at 08:02 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sub-tri`
--

-- --------------------------------------------------------

--
-- Table structure for table `curlist`
--

CREATE TABLE `curlist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `datem` datetime NOT NULL,
  `empid` float NOT NULL,
  `mapto` varchar(255) NOT NULL,
  `import` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `curlist`
--

INSERT INTO `curlist` (`id`, `name`, `datem`, `empid`, `mapto`, `import`, `type`) VALUES
(1, 'Yogayata Verma', '2023-04-04 00:00:00', 101, 'kk_abhinav_abhishek', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'UW'),
(2, 'Rajni Verma', '2023-04-11 00:00:00', 102, '', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(3, 'Davinder Verma', '2023-04-04 00:00:00', 103, 'kk', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'SU'),
(4, 'Virender Verma', '2023-04-11 00:00:00', 104, 'mapto', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(5, 'Yogayata Verma', '2023-04-04 00:00:00', 101, 'kk_abhinav_abhishek', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'UW'),
(6, 'Rajni Verma', '2023-04-11 00:00:00', 102, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(7, 'Davinder Verma', '2023-04-04 00:00:00', 103, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'SU'),
(8, 'Virender Verma', '2023-04-11 00:00:00', 104, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(9, 'Yogayata Verma', '2023-04-04 00:00:00', 101, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'UW'),
(10, 'Rajni Verma', '2023-04-11 00:00:00', 102, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(11, 'Davinder Verma', '2023-04-04 00:00:00', 103, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'SU'),
(12, 'Virender Verma', '2023-04-11 00:00:00', 104, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(15, 'Davinder Verma', '2023-04-04 00:00:00', 103, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'SU'),
(20, 'Yogayata Verma', '2023-04-04 00:00:00', 101, 'jj', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'UW'),
(21, 'Rajni Verma', '2023-04-11 00:00:00', 102, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(22, 'Davinder Verma', '2023-04-04 00:00:00', 103, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'SU'),
(23, 'Virender Verma', '2023-04-11 00:00:00', 104, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(24, 'Yogayata Verma', '2023-04-04 00:00:00', 101, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'UW'),
(25, 'Rajni Verma', '2023-04-11 00:00:00', 102, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(26, 'Davinder Verma', '2023-04-04 00:00:00', 103, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'SU'),
(27, 'Virender Verma', '2023-04-11 00:00:00', 104, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(28, 'Yogayata Verma', '2023-04-04 00:00:00', 101, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'UW'),
(29, 'Rajni Verma', '2023-04-11 00:00:00', 102, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(30, 'Davinder Verma', '2023-04-04 00:00:00', 103, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'SU'),
(31, 'Virender Verma', '2023-04-11 00:00:00', 104, 'Davinder Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'TL'),
(32, 'Davinder Verma', '2023-04-04 00:00:00', 103, 'Abhinav Verma', '<i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>', 'SU'),
(37, '', '0000-00-00 00:00:00', 0, 'mapto', '', ''),
(38, '', '0000-00-00 00:00:00', 0, 'mapto', '', ''),
(39, '', '0000-00-00 00:00:00', 0, 'mapto', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `doc`
--

CREATE TABLE `doc` (
  `id` int(255) NOT NULL,
  `spoc` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `ids` varchar(255) NOT NULL,
  `desci` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `docu`
--

CREATE TABLE `docu` (
  `id` int(255) NOT NULL,
  `desci` varchar(255) NOT NULL,
  `spoc` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `ids` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `docu`
--

INSERT INTO `docu` (`id`, `desci`, `spoc`, `file`, `ids`) VALUES
(1, 'PDF', 'Admin@thapar.com', 'ff', 'Admin@thapar.com'),
(2, 'PDF', 'Admin@thapar.com', 'cert.png', 'Admin@thapar.com'),
(3, 'PDF', 'Admin@thapar.com', '_admin_company_view.png', 'Admin@thapar.com'),
(4, 'PDF', 'Admin@thapar.com', 'edit1.png', 'Admin@thapar.com'),
(5, 'PDF', 'Admin@thapar.com', '_mypic.jpg', 'Admin@thapar.com'),
(6, 'jj', 'Admin@thapar.com', '_MyPic.jpeg', 'Admin@thapar.com'),
(7, 'kk', 'Admin@thapar.com', 'bootstrap.png', 'Admin@thapar.com'),
(8, 'kk', 'Admin@thapar.com', '_bootstrap.jpeg', 'Admin@thapar.com');

-- --------------------------------------------------------

--
-- Table structure for table `docu1`
--

CREATE TABLE `docu1` (
  `id` int(255) NOT NULL,
  `spoc` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `ids` varchar(255) NOT NULL,
  `desci` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `documen`
--

CREATE TABLE `documen` (
  `id` int(255) NOT NULL,
  `spoc` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `ids` varchar(255) NOT NULL,
  `desci` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `filter`
--

CREATE TABLE `filter` (
  `id` int(255) NOT NULL,
  `date_s` date NOT NULL,
  `date_f` date NOT NULL,
  `br1no_sum` float NOT NULL,
  `br1no_bind` float NOT NULL,
  `br1no_quotes` float NOT NULL,
  `br1new2` float NOT NULL,
  `br1renew2` float NOT NULL,
  `br1primary2` float NOT NULL,
  `br1xs2` float NOT NULL,
  `br1quote_rate` float NOT NULL,
  `br1bind_rate` float NOT NULL,
  `br1retention_rate` float NOT NULL,
  `br1tip` float NOT NULL,
  `br1gwp` float NOT NULL,
  `br1avg_time` float NOT NULL,
  `br1closed` int(255) NOT NULL,
  `br2no_sum` float NOT NULL,
  `br2closed` float NOT NULL,
  `br2no_bind` float NOT NULL,
  `br2no_quote` float NOT NULL,
  `br2new2` float NOT NULL,
  `br2renew2` float NOT NULL,
  `br2primary2` float NOT NULL,
  `br2xs2` float NOT NULL,
  `br2quote_rate` float NOT NULL,
  `br2bind_rate` float NOT NULL,
  `br2retention_rate` float NOT NULL,
  `br2tiv` float NOT NULL,
  `br2gwp` float NOT NULL,
  `br2avg_time` float NOT NULL,
  `uw1no_sum` float NOT NULL,
  `uw1closed` float NOT NULL,
  `uw1no_bind` float NOT NULL,
  `uw1no_quote` float NOT NULL,
  `uw1new2` float NOT NULL,
  `uw1renew2` float NOT NULL,
  `uw1primary2` float NOT NULL,
  `uw1xs2` float NOT NULL,
  `uw1quote_rate` float NOT NULL,
  `uw1bind_rate` float NOT NULL,
  `uw1rentetion_rate` float NOT NULL,
  `uw1tiv` float NOT NULL,
  `uw1gwp` float NOT NULL,
  `uw1avg_time` float NOT NULL,
  `uw2no_sum` float NOT NULL,
  `uw2closed` float NOT NULL,
  `uw2no_bind` float NOT NULL,
  `uw2no_quote` float NOT NULL,
  `uw2new2` float NOT NULL,
  `uw2renew2` float NOT NULL,
  `uw2primary2` float NOT NULL,
  `uw2xs2` float NOT NULL,
  `uw2quote_rate` float NOT NULL,
  `uw2bind_rate` float NOT NULL,
  `uw2retention_rate` float NOT NULL,
  `uw2tiv` float NOT NULL,
  `uw2gwp` float NOT NULL,
  `uw2avg_time` float NOT NULL,
  `gno_sum` float NOT NULL,
  `gclosed` float NOT NULL,
  `gno_bind` float NOT NULL,
  `gno_quote` float NOT NULL,
  `gnew2` float NOT NULL,
  `grenew2` float NOT NULL,
  `gprimary2` float NOT NULL,
  `gxs2` float NOT NULL,
  `gquote_rate` float NOT NULL,
  `gbind_rate` float NOT NULL,
  `gretention_rate` float NOT NULL,
  `gtiv` float NOT NULL,
  `ggwp` float NOT NULL,
  `gavg_time` float NOT NULL,
  `ano_sum` float NOT NULL,
  `aclosed` float NOT NULL,
  `ano_bind` float NOT NULL,
  `ano_quote` float NOT NULL,
  `anew2` float NOT NULL,
  `arenew2` float NOT NULL,
  `aprimary2` float NOT NULL,
  `axs2` float NOT NULL,
  `aquote_rate` float NOT NULL,
  `abind_rate` float NOT NULL,
  `aretention_rate` float NOT NULL,
  `ativ` float NOT NULL,
  `agwp` float NOT NULL,
  `aavg_time` float NOT NULL,
  `ron_sum` float NOT NULL,
  `rclosed` float NOT NULL,
  `ron_bind` float NOT NULL,
  `ron_quote` float NOT NULL,
  `rnew2` float NOT NULL,
  `rrenew2` float NOT NULL,
  `rprimary2` float NOT NULL,
  `rxs2` float NOT NULL,
  `rquote_rate` float NOT NULL,
  `rbind_rate` float NOT NULL,
  `rretention_rate` float NOT NULL,
  `rtiv` float NOT NULL,
  `rgwp` float NOT NULL,
  `ravg_time` float NOT NULL,
  `non_sum` float NOT NULL,
  `nclosed` float NOT NULL,
  `nno_bind` float NOT NULL,
  `nquote` float NOT NULL,
  `nnew2` float NOT NULL,
  `nrenew2` float NOT NULL,
  `nprimary2` float NOT NULL,
  `nxs2` float NOT NULL,
  `nbind_rate` float NOT NULL,
  `nquote_rate` float NOT NULL,
  `nretention_rate` float NOT NULL,
  `ntiv` float NOT NULL,
  `ngwp` float NOT NULL,
  `navg_time` float NOT NULL,
  `reno_sum` float NOT NULL,
  `reclosed` float NOT NULL,
  `reno_bind` float NOT NULL,
  `reno_quote` float NOT NULL,
  `renew2` float NOT NULL,
  `rerenew2` float NOT NULL,
  `reprimary2` float NOT NULL,
  `rexs2` float NOT NULL,
  `requote_rate` float NOT NULL,
  `rebind_rate` float NOT NULL,
  `reretention_rate` float NOT NULL,
  `retiv` float NOT NULL,
  `regwp` float NOT NULL,
  `reavg_time` float NOT NULL,
  `ono_sum` float NOT NULL,
  `oclosed` float NOT NULL,
  `ono_bind` float NOT NULL,
  `ono_quote` float NOT NULL,
  `onew2` float NOT NULL,
  `orenew2` float NOT NULL,
  `oprimary2` float NOT NULL,
  `oxs2` float NOT NULL,
  `oquote_rate` float NOT NULL,
  `obind_rate` float NOT NULL,
  `oretention_rate` float NOT NULL,
  `otiv` float NOT NULL,
  `ogwp` float NOT NULL,
  `oavg_time` float NOT NULL,
  `lno_sum` float NOT NULL,
  `lclosed` float NOT NULL,
  `lno_bind` float NOT NULL,
  `lno_quote` float NOT NULL,
  `lnew2` float NOT NULL,
  `lrenew2` float NOT NULL,
  `lprimary2` float NOT NULL,
  `lxs2` float NOT NULL,
  `lbind_rate` float NOT NULL,
  `lquote__rate` float NOT NULL,
  `lretention_rate` float NOT NULL,
  `ltiv` float NOT NULL,
  `lgwp` float NOT NULL,
  `lavg_time` float NOT NULL,
  `pno_sum` float NOT NULL,
  `pclosed` float NOT NULL,
  `pno_bind` float NOT NULL,
  `pno_quote` float NOT NULL,
  `pnew2` float NOT NULL,
  `prenew2` float NOT NULL,
  `pprimary2` float NOT NULL,
  `pxs2` float NOT NULL,
  `pbind_rate` float NOT NULL,
  `pquote_rate` float NOT NULL,
  `pretention_rate` float NOT NULL,
  `ptiv` float NOT NULL,
  `pgwp` float NOT NULL,
  `pavg_time` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `filter`
--

INSERT INTO `filter` (`id`, `date_s`, `date_f`, `br1no_sum`, `br1no_bind`, `br1no_quotes`, `br1new2`, `br1renew2`, `br1primary2`, `br1xs2`, `br1quote_rate`, `br1bind_rate`, `br1retention_rate`, `br1tip`, `br1gwp`, `br1avg_time`, `br1closed`, `br2no_sum`, `br2closed`, `br2no_bind`, `br2no_quote`, `br2new2`, `br2renew2`, `br2primary2`, `br2xs2`, `br2quote_rate`, `br2bind_rate`, `br2retention_rate`, `br2tiv`, `br2gwp`, `br2avg_time`, `uw1no_sum`, `uw1closed`, `uw1no_bind`, `uw1no_quote`, `uw1new2`, `uw1renew2`, `uw1primary2`, `uw1xs2`, `uw1quote_rate`, `uw1bind_rate`, `uw1rentetion_rate`, `uw1tiv`, `uw1gwp`, `uw1avg_time`, `uw2no_sum`, `uw2closed`, `uw2no_bind`, `uw2no_quote`, `uw2new2`, `uw2renew2`, `uw2primary2`, `uw2xs2`, `uw2quote_rate`, `uw2bind_rate`, `uw2retention_rate`, `uw2tiv`, `uw2gwp`, `uw2avg_time`, `gno_sum`, `gclosed`, `gno_bind`, `gno_quote`, `gnew2`, `grenew2`, `gprimary2`, `gxs2`, `gquote_rate`, `gbind_rate`, `gretention_rate`, `gtiv`, `ggwp`, `gavg_time`, `ano_sum`, `aclosed`, `ano_bind`, `ano_quote`, `anew2`, `arenew2`, `aprimary2`, `axs2`, `aquote_rate`, `abind_rate`, `aretention_rate`, `ativ`, `agwp`, `aavg_time`, `ron_sum`, `rclosed`, `ron_bind`, `ron_quote`, `rnew2`, `rrenew2`, `rprimary2`, `rxs2`, `rquote_rate`, `rbind_rate`, `rretention_rate`, `rtiv`, `rgwp`, `ravg_time`, `non_sum`, `nclosed`, `nno_bind`, `nquote`, `nnew2`, `nrenew2`, `nprimary2`, `nxs2`, `nbind_rate`, `nquote_rate`, `nretention_rate`, `ntiv`, `ngwp`, `navg_time`, `reno_sum`, `reclosed`, `reno_bind`, `reno_quote`, `renew2`, `rerenew2`, `reprimary2`, `rexs2`, `requote_rate`, `rebind_rate`, `reretention_rate`, `retiv`, `regwp`, `reavg_time`, `ono_sum`, `oclosed`, `ono_bind`, `ono_quote`, `onew2`, `orenew2`, `oprimary2`, `oxs2`, `oquote_rate`, `obind_rate`, `oretention_rate`, `otiv`, `ogwp`, `oavg_time`, `lno_sum`, `lclosed`, `lno_bind`, `lno_quote`, `lnew2`, `lrenew2`, `lprimary2`, `lxs2`, `lbind_rate`, `lquote__rate`, `lretention_rate`, `ltiv`, `lgwp`, `lavg_time`, `pno_sum`, `pclosed`, `pno_bind`, `pno_quote`, `pnew2`, `prenew2`, `pprimary2`, `pxs2`, `pbind_rate`, `pquote_rate`, `pretention_rate`, `ptiv`, `pgwp`, `pavg_time`) VALUES
(1, '2023-03-02', '2023-03-03', 233, 32, 43, 12, 43, 76, 54, 76, 6, 67, 54, 54, 54, 21, 34, 23, 58, 76, 98, 12, 43, 21, 43, 32, 76, 65, 76, 54, 87, 76, 65, 43, 76, 87, 87, 54, 9, 98, 78, 12, 34, 65, 64, 42, 55, 76, 87, 23, 65, 76, 54, 98, 87, 76, 21, 43, 53, 43, 65, 65, 43, 65, 76, 65, 65, 65, 43, 32, 76, 65, 87, 76, 65, 65, 54, 65, 65, 54, 66, 65, 43, 54, 65, 65, 34, 43, 65, 54, 76, 76, 12, 32, 43, 43, 87, 54, 43, 65, 76, 87, 65, 87, 65, 54, 43, 32, 54, 43, 76, 65, 65, 87, 79, 87, 41, 51, 63, 21, 43, 54, 65, 76, 76, 87, 87, 86, 65, 87, 32, 95, 95, 73, 70, 21, 33, 43, 54, 43, 54, 43, 21, 65, 76, 75, 54, 65, 76, 76, 64, 43, 65, 76, 87, 76, 64, 65, 43, 44, 43, 54, 65, 54, 54, 43, 43, 53, 54, 54);

-- --------------------------------------------------------

--
-- Table structure for table `filter2`
--

CREATE TABLE `filter2` (
  `id` int(255) NOT NULL,
  `gno_sum` float NOT NULL,
  `gclosed` float NOT NULL,
  `gno_binds` float NOT NULL,
  `gquote_rate1` float NOT NULL,
  `gquote_rate2` float NOT NULL,
  `greview_rate1` float NOT NULL,
  `greview_rate2` float NOT NULL,
  `greview_rateg1` float NOT NULL,
  `greview_rateg2` float NOT NULL,
  `greview_rater1` float NOT NULL,
  `greview_rater2` float NOT NULL,
  `ano_sum` float NOT NULL,
  `aclosed` float NOT NULL,
  `abind_rate` float NOT NULL,
  `aquote_rate1` float NOT NULL,
  `aquote_rate2` float NOT NULL,
  `areview_rate1` float NOT NULL,
  `areview_rate2` float NOT NULL,
  `areview_rateg1` float NOT NULL,
  `areview_rateg2` float NOT NULL,
  `areview_rater1` float NOT NULL,
  `areview_rater2` float NOT NULL,
  `rno_sum` float NOT NULL,
  `rclosed` float NOT NULL,
  `rno_bind` float NOT NULL,
  `rquote_rate1` float NOT NULL,
  `rquote_rate2` float NOT NULL,
  `rreview_rate1` float NOT NULL,
  `rreview_rate2` float NOT NULL,
  `rreview_rateg1` float NOT NULL,
  `rreview_rateg2` float NOT NULL,
  `rreview_rater1` float NOT NULL,
  `rreview_rater2` float NOT NULL,
  `nno_sum` float NOT NULL,
  `nclosed` float NOT NULL,
  `nno_bind` float NOT NULL,
  `nquote_rate1` float NOT NULL,
  `nquote_rate2` float NOT NULL,
  `nreview_rate1` float NOT NULL,
  `nreview_rate2` float NOT NULL,
  `nreview_rateg1` float NOT NULL,
  `nreview_rateg2` float NOT NULL,
  `nreview_rater1` float NOT NULL,
  `nreview_rater2` float NOT NULL,
  `reno_sum` float NOT NULL,
  `reclosed` float NOT NULL,
  `reno_bind` float NOT NULL,
  `requote_rate1` float NOT NULL,
  `requote_rate2` float NOT NULL,
  `rereview_rate1` float NOT NULL,
  `rereview_rate2` float NOT NULL,
  `rereview_rateg1` float NOT NULL,
  `rereview_rateg2` float NOT NULL,
  `rereview_rater1` float NOT NULL,
  `rereview_rater2` float NOT NULL,
  `br1no_sum` float NOT NULL,
  `br1closed` float NOT NULL,
  `br1no_bind` float NOT NULL,
  `br1quote_rate1` float NOT NULL,
  `br1quote_rate2` float NOT NULL,
  `br1review_rate1` float NOT NULL,
  `br1review_rate2` float NOT NULL,
  `br1review_rateg1` float NOT NULL,
  `br1review_rateg2` float NOT NULL,
  `br1review_rater1` float NOT NULL,
  `br1review_rater2` float NOT NULL,
  `br2no_sum` float NOT NULL,
  `br2closed` float NOT NULL,
  `br2no_bind` float NOT NULL,
  `br2quote_rate1` float NOT NULL,
  `br2quote_rate2` float NOT NULL,
  `br2review_rate1` float NOT NULL,
  `br2review_rate2` float NOT NULL,
  `br2review_rateg1` float NOT NULL,
  `br2review_rateg2` float NOT NULL,
  `br2review_rater1` float NOT NULL,
  `br2review_rater2` float NOT NULL,
  `uw1no_sum` float NOT NULL,
  `uw1closed` float NOT NULL,
  `uw1no_bind` float NOT NULL,
  `uw1quote_rate1` float NOT NULL,
  `uw1quote_rate2` float NOT NULL,
  `uw1review_rate1` float NOT NULL,
  `uw1review_rate2` float NOT NULL,
  `uw1review_rateg1` float NOT NULL,
  `uw1review_rateg2` float NOT NULL,
  `uw1review_rater1` float NOT NULL,
  `uw1review_rater2` float NOT NULL,
  `uw2no_sum` float NOT NULL,
  `uw2closed` float NOT NULL,
  `uw2no_bind` float NOT NULL,
  `uw2quote_rate1` float NOT NULL,
  `uw2quote_rate2` float NOT NULL,
  `uw2review_rate1` float NOT NULL,
  `uw2review_rate2` float NOT NULL,
  `uw2review_rateg1` float NOT NULL,
  `uw2review_rateg2` float NOT NULL,
  `uw2review_rater1` float NOT NULL,
  `uw2review_rater2` float NOT NULL,
  `ono_sum` float NOT NULL,
  `oclosed` float NOT NULL,
  `ono_bind` float NOT NULL,
  `oquote_rate1` float NOT NULL,
  `oquote_rate2` float NOT NULL,
  `oreview_rate1` float NOT NULL,
  `oreview_rate2` float NOT NULL,
  `oreview_rateg1` float NOT NULL,
  `oreview_rateg2` float NOT NULL,
  `oreview_rater1` float NOT NULL,
  `oreview_rater2` float NOT NULL,
  `lno_sum` float NOT NULL,
  `lclosed` float NOT NULL,
  `lno_bind` float NOT NULL,
  `lquote_rate1` float NOT NULL,
  `lquote_rate2` float NOT NULL,
  `lreview_rate1` float NOT NULL,
  `lreview_rate2` float NOT NULL,
  `lreview_rateg1` float NOT NULL,
  `lreview_rateg2` float NOT NULL,
  `lreview_rater1` float NOT NULL,
  `lreview_rater2` float NOT NULL,
  `pno_sum` float NOT NULL,
  `pclosed` float NOT NULL,
  `pno_bind` float NOT NULL,
  `pquote_rate1` float NOT NULL,
  `pquote_rate2` float NOT NULL,
  `preview_rate1` float NOT NULL,
  `preview_rate2` float NOT NULL,
  `preview_rateg1` float NOT NULL,
  `preview_rateg2` float NOT NULL,
  `preview_rater1` float NOT NULL,
  `preview_rater2` float NOT NULL,
  `gg1` float NOT NULL,
  `gg2` float NOT NULL,
  `gg3` float NOT NULL,
  `gg4` float NOT NULL,
  `ag1` float NOT NULL,
  `ag2` float NOT NULL,
  `ag3` float NOT NULL,
  `ag4` float NOT NULL,
  `rg1` float NOT NULL,
  `rg2` float NOT NULL,
  `rg3` float NOT NULL,
  `rg4` float NOT NULL,
  `ng1` float NOT NULL,
  `ng2` float NOT NULL,
  `ng3` float NOT NULL,
  `ng4` float NOT NULL,
  `reg1` float NOT NULL,
  `reg2` float NOT NULL,
  `reg3` float NOT NULL,
  `reg4` float NOT NULL,
  `br1g1` float NOT NULL,
  `br1g2` float NOT NULL,
  `br1g3` float NOT NULL,
  `br1g4` float NOT NULL,
  `br2g1` float NOT NULL,
  `br2g2` float NOT NULL,
  `br2g3` float NOT NULL,
  `br2g4` float NOT NULL,
  `uw1g1` float NOT NULL,
  `uw1g2` float NOT NULL,
  `uw1g3` float NOT NULL,
  `uw1g4` float NOT NULL,
  `uw2g1` float NOT NULL,
  `uw2g2` float NOT NULL,
  `uw2g3` float NOT NULL,
  `uw2g4` float NOT NULL,
  `og1` float NOT NULL,
  `og2` float NOT NULL,
  `og3` float NOT NULL,
  `og4` float NOT NULL,
  `lg1` float NOT NULL,
  `lg2` float NOT NULL,
  `lg3` float NOT NULL,
  `lg4` float NOT NULL,
  `pg1` float NOT NULL,
  `pg2` float NOT NULL,
  `pg3` float NOT NULL,
  `pg4` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `filter2`
--

INSERT INTO `filter2` (`id`, `gno_sum`, `gclosed`, `gno_binds`, `gquote_rate1`, `gquote_rate2`, `greview_rate1`, `greview_rate2`, `greview_rateg1`, `greview_rateg2`, `greview_rater1`, `greview_rater2`, `ano_sum`, `aclosed`, `abind_rate`, `aquote_rate1`, `aquote_rate2`, `areview_rate1`, `areview_rate2`, `areview_rateg1`, `areview_rateg2`, `areview_rater1`, `areview_rater2`, `rno_sum`, `rclosed`, `rno_bind`, `rquote_rate1`, `rquote_rate2`, `rreview_rate1`, `rreview_rate2`, `rreview_rateg1`, `rreview_rateg2`, `rreview_rater1`, `rreview_rater2`, `nno_sum`, `nclosed`, `nno_bind`, `nquote_rate1`, `nquote_rate2`, `nreview_rate1`, `nreview_rate2`, `nreview_rateg1`, `nreview_rateg2`, `nreview_rater1`, `nreview_rater2`, `reno_sum`, `reclosed`, `reno_bind`, `requote_rate1`, `requote_rate2`, `rereview_rate1`, `rereview_rate2`, `rereview_rateg1`, `rereview_rateg2`, `rereview_rater1`, `rereview_rater2`, `br1no_sum`, `br1closed`, `br1no_bind`, `br1quote_rate1`, `br1quote_rate2`, `br1review_rate1`, `br1review_rate2`, `br1review_rateg1`, `br1review_rateg2`, `br1review_rater1`, `br1review_rater2`, `br2no_sum`, `br2closed`, `br2no_bind`, `br2quote_rate1`, `br2quote_rate2`, `br2review_rate1`, `br2review_rate2`, `br2review_rateg1`, `br2review_rateg2`, `br2review_rater1`, `br2review_rater2`, `uw1no_sum`, `uw1closed`, `uw1no_bind`, `uw1quote_rate1`, `uw1quote_rate2`, `uw1review_rate1`, `uw1review_rate2`, `uw1review_rateg1`, `uw1review_rateg2`, `uw1review_rater1`, `uw1review_rater2`, `uw2no_sum`, `uw2closed`, `uw2no_bind`, `uw2quote_rate1`, `uw2quote_rate2`, `uw2review_rate1`, `uw2review_rate2`, `uw2review_rateg1`, `uw2review_rateg2`, `uw2review_rater1`, `uw2review_rater2`, `ono_sum`, `oclosed`, `ono_bind`, `oquote_rate1`, `oquote_rate2`, `oreview_rate1`, `oreview_rate2`, `oreview_rateg1`, `oreview_rateg2`, `oreview_rater1`, `oreview_rater2`, `lno_sum`, `lclosed`, `lno_bind`, `lquote_rate1`, `lquote_rate2`, `lreview_rate1`, `lreview_rate2`, `lreview_rateg1`, `lreview_rateg2`, `lreview_rater1`, `lreview_rater2`, `pno_sum`, `pclosed`, `pno_bind`, `pquote_rate1`, `pquote_rate2`, `preview_rate1`, `preview_rate2`, `preview_rateg1`, `preview_rateg2`, `preview_rater1`, `preview_rater2`, `gg1`, `gg2`, `gg3`, `gg4`, `ag1`, `ag2`, `ag3`, `ag4`, `rg1`, `rg2`, `rg3`, `rg4`, `ng1`, `ng2`, `ng3`, `ng4`, `reg1`, `reg2`, `reg3`, `reg4`, `br1g1`, `br1g2`, `br1g3`, `br1g4`, `br2g1`, `br2g2`, `br2g3`, `br2g4`, `uw1g1`, `uw1g2`, `uw1g3`, `uw1g4`, `uw2g1`, `uw2g2`, `uw2g3`, `uw2g4`, `og1`, `og2`, `og3`, `og4`, `lg1`, `lg2`, `lg3`, `lg4`, `pg1`, `pg2`, `pg3`, `pg4`) VALUES
(1, 23, 73, 54, 65, 32, 75, 54, 54, 54, 43, 54, 54, 32, 54, 43, 54, 43, 54, 45, 54, 52, 43, 54, 54, 43, 43, 76, 54, 54, 53, 54, 54, 64, 65, 54, 32, 54, 65, 64, 76, 76, 54, 54, 54, 54, 65, 98, 76, 76, 76, 65, 65, 65, 76, 76, 76, 87, 76, 65, 76, 76, 43, 43, 54, 43, 43, 32, 43, 54, 43, 32, 43, 43, 54, 54, 54, 54, 54, 65, 65, 65, 42, 54, 54, 54, 97, 76, 65, 65, 76, 76, 43, 55, 65, 76, 65, 54, 76, 76, 87, 32, 15, 54, 43, 32, 54, 43, 65, 76, 43, 54, 65, 76, 98, 87, 65, 54, 54, 43, 54, 65, 54, 54, 54, 54, 65, 76, 76, 65, 54, 42, 43, 32, 43, 54, 54, 54, 65, 76, 65, 64, 87, 65, 65, 43, 42, 65, 65, 76, 65, 54, 65, 87, 76, 65, 65, 65, 76, 76, 76, 65, 54, 62, 54, 54, 65, 65, 43, 54, 53, 54, 65, 76, 65, 54, 76, 53, 65, 65, 65);

-- --------------------------------------------------------

--
-- Table structure for table `model`
--

CREATE TABLE `model` (
  `id` int(255) NOT NULL,
  `variable` varchar(255) NOT NULL,
  `desci` varchar(255) NOT NULL,
  `cur` int(255) NOT NULL,
  `new1` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `model`
--

INSERT INTO `model` (`id`, `variable`, `desci`, `cur`, `new1`) VALUES
(1, 'Model Score', 'Model', 21, 25),
(2, 'Data Score', '___', 13, 99),
(3, 'Occupancy Score', '___', 13, 88),
(4, 'Class Code Score', 'Type of Business', 31, 99),
(5, 'Broker Score', 'Broker Specific', 14, 45),
(6, 'Premium Score', '___', 7, 56),
(7, 'Loss Exp', '___', 1, 99);

-- --------------------------------------------------------

--
-- Table structure for table `modelf`
--

CREATE TABLE `modelf` (
  `id` int(255) NOT NULL,
  `no_sum` float NOT NULL,
  `closed` float NOT NULL,
  `no_bind` float NOT NULL,
  `quote_rate1` float NOT NULL,
  `review_rate1` int(11) NOT NULL,
  `review_rateg1` float NOT NULL,
  `review_rater1` float NOT NULL,
  `g1` float NOT NULL,
  `g2` float NOT NULL,
  `g3` float NOT NULL,
  `g4` float NOT NULL,
  `quote_rate2` float NOT NULL,
  `review_rate2` float NOT NULL,
  `review_rateg2` float NOT NULL,
  `review_rater2` float NOT NULL,
  `h1` float NOT NULL,
  `h2` float NOT NULL,
  `h3` float NOT NULL,
  `h4` float NOT NULL,
  `h5` float NOT NULL,
  `h6` float NOT NULL,
  `h7` float NOT NULL,
  `h8` float NOT NULL,
  `h9` float NOT NULL,
  `h10` float NOT NULL,
  `h11` float NOT NULL,
  `h12` float NOT NULL,
  `h13` float NOT NULL,
  `h14` float NOT NULL,
  `h15` float NOT NULL,
  `h16` float NOT NULL,
  `h17` float NOT NULL,
  `h18` float NOT NULL,
  `h19` float NOT NULL,
  `h20` float NOT NULL,
  `l1` float NOT NULL,
  `l2` float NOT NULL,
  `l3` float NOT NULL,
  `l4` float NOT NULL,
  `l5` float NOT NULL,
  `l6` float NOT NULL,
  `l7` float NOT NULL,
  `l8` float NOT NULL,
  `l9` float NOT NULL,
  `l10` float NOT NULL,
  `l11` float NOT NULL,
  `l12` float NOT NULL,
  `l13` float NOT NULL,
  `l14` float NOT NULL,
  `l15` float NOT NULL,
  `l16` float NOT NULL,
  `l17` float NOT NULL,
  `l18` float NOT NULL,
  `l19` float NOT NULL,
  `l20` float NOT NULL,
  `l21` float NOT NULL,
  `l22` float NOT NULL,
  `l23` float NOT NULL,
  `l24` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modelf`
--

INSERT INTO `modelf` (`id`, `no_sum`, `closed`, `no_bind`, `quote_rate1`, `review_rate1`, `review_rateg1`, `review_rater1`, `g1`, `g2`, `g3`, `g4`, `quote_rate2`, `review_rate2`, `review_rateg2`, `review_rater2`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `h10`, `h11`, `h12`, `h13`, `h14`, `h15`, `h16`, `h17`, `h18`, `h19`, `h20`, `l1`, `l2`, `l3`, `l4`, `l5`, `l6`, `l7`, `l8`, `l9`, `l10`, `l11`, `l12`, `l13`, `l14`, `l15`, `l16`, `l17`, `l18`, `l19`, `l20`, `l21`, `l22`, `l23`, `l24`) VALUES
(1, 32, 43, 65, 43, 23, 65, 43, 54, 55, -54, -53, 65, 76, 54, 76, 43, 54, 32, 66, 76, 87, 65, 87, 87, 76, 98, 75, 65, 32, 43, 54, 65, 76, 65, 54, 43, 76, 54, 87, 87, 21, 43, 54, 54, 32, 64, 65, 43, 54, 74, 65, 54, 87, 65, 54, 54, 43, 54, 54);

-- --------------------------------------------------------

--
-- Table structure for table `overview`
--

CREATE TABLE `overview` (
  `id` int(255) NOT NULL,
  `date_s` date NOT NULL,
  `date_f` date NOT NULL,
  `no_sum` float NOT NULL,
  `no_bind` float NOT NULL,
  `no_quotes` float NOT NULL,
  `new2` float NOT NULL,
  `renew2` float NOT NULL,
  `primary2` float NOT NULL,
  `xs2` float NOT NULL,
  `quote_rate` float NOT NULL,
  `bind_rate` float NOT NULL,
  `retention_rate` float NOT NULL,
  `tip` float NOT NULL,
  `gwp` float NOT NULL,
  `avg_time` float NOT NULL,
  `closed` int(255) NOT NULL,
  `doughnut` float NOT NULL,
  `dou1` float NOT NULL,
  `dou2` float NOT NULL,
  `dou3` float NOT NULL,
  `d1` float NOT NULL,
  `d2` float NOT NULL,
  `d3` float NOT NULL,
  `sqp1` float NOT NULL,
  `sqp2` float NOT NULL,
  `sqp3` float NOT NULL,
  `sqp4` float NOT NULL,
  `sqp5` float NOT NULL,
  `sqp6` float NOT NULL,
  `sqm1` float NOT NULL,
  `sqm2` float NOT NULL,
  `sqm3` float NOT NULL,
  `sqm4` float NOT NULL,
  `sqm5` float NOT NULL,
  `sqm6` float NOT NULL,
  `sqm7` float NOT NULL,
  `sqm8` float NOT NULL,
  `sqm9` float NOT NULL,
  `sqm10` float NOT NULL,
  `qbr1` float NOT NULL,
  `qbr2` float NOT NULL,
  `qbr3` float NOT NULL,
  `qbr4` float NOT NULL,
  `qbr5` float NOT NULL,
  `qbr6` float NOT NULL,
  `qbr7` float NOT NULL,
  `qbr8` float NOT NULL,
  `qbr9` float NOT NULL,
  `qbr10` float NOT NULL,
  `qbr11` float NOT NULL,
  `qbr12` float NOT NULL,
  `qbr13` float NOT NULL,
  `qbr14` float NOT NULL,
  `qbr15` float NOT NULL,
  `qbr16` float NOT NULL,
  `qbr17` float NOT NULL,
  `qbr18` float NOT NULL,
  `qbr19` float NOT NULL,
  `qbr20` float NOT NULL,
  `qbr21` float NOT NULL,
  `qbr22` float NOT NULL,
  `qbr23` float NOT NULL,
  `qbr24` float NOT NULL,
  `qbr25` float NOT NULL,
  `qbr26` float NOT NULL,
  `qbr27` float NOT NULL,
  `qbr28` float NOT NULL,
  `qbr29` float NOT NULL,
  `qbr30` float NOT NULL,
  `qbr31` float NOT NULL,
  `qbr32` float NOT NULL,
  `qbr33` float NOT NULL,
  `qbr34` float NOT NULL,
  `qbr35` float NOT NULL,
  `qbr36` float NOT NULL,
  `pdou1` float NOT NULL,
  `pdou2` float NOT NULL,
  `pdou3` float NOT NULL,
  `ipdou1` float NOT NULL,
  `ipdou2` float NOT NULL,
  `ipdou3` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `overview`
--

INSERT INTO `overview` (`id`, `date_s`, `date_f`, `no_sum`, `no_bind`, `no_quotes`, `new2`, `renew2`, `primary2`, `xs2`, `quote_rate`, `bind_rate`, `retention_rate`, `tip`, `gwp`, `avg_time`, `closed`, `doughnut`, `dou1`, `dou2`, `dou3`, `d1`, `d2`, `d3`, `sqp1`, `sqp2`, `sqp3`, `sqp4`, `sqp5`, `sqp6`, `sqm1`, `sqm2`, `sqm3`, `sqm4`, `sqm5`, `sqm6`, `sqm7`, `sqm8`, `sqm9`, `sqm10`, `qbr1`, `qbr2`, `qbr3`, `qbr4`, `qbr5`, `qbr6`, `qbr7`, `qbr8`, `qbr9`, `qbr10`, `qbr11`, `qbr12`, `qbr13`, `qbr14`, `qbr15`, `qbr16`, `qbr17`, `qbr18`, `qbr19`, `qbr20`, `qbr21`, `qbr22`, `qbr23`, `qbr24`, `qbr25`, `qbr26`, `qbr27`, `qbr28`, `qbr29`, `qbr30`, `qbr31`, `qbr32`, `qbr33`, `qbr34`, `qbr35`, `qbr36`, `pdou1`, `pdou2`, `pdou3`, `ipdou1`, `ipdou2`, `ipdou3`) VALUES
(1, '2023-03-02', '2023-03-03', 22, 33, 43, 45, 23, 46, 54, 53, 12, 34, 65, 45, 45, 234, 34, 23, 43, 44, 62, 32, 34, 32, 43, 32, 54, 65, 21, 32, 34, 56, 65, 45, 65, 43, 76, 65, 23, 54, 43, 54, 54, 23, 76, 23, 34, 12, 65, 54, 76, 65, 78, 87, 65, 43, 32, 54, 54, 67, 65, 54, 54, 54, 32, 43, 32, 32, 54, 65, 43, 76, 65, 65, 65, 65, 54, 32, 65, 43, 43);

-- --------------------------------------------------------

--
-- Table structure for table `support`
--

CREATE TABLE `support` (
  `id` int(255) NOT NULL,
  `spoc` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `ids` varchar(255) NOT NULL,
  `concern` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `support`
--

INSERT INTO `support` (`id`, `spoc`, `file`, `ids`, `concern`, `status`) VALUES
(1, 'Admin@thapar.com', 'jj', 'Admin@gmail.com', '--', 'Solved'),
(2, 'Admin@thapar.com', 'bootstrap.jpeg', 'Admin@thapar.com', 'ss', 'Solved'),
(3, 'Admin@thapar.com', 'admin_company_view.png', 'Admin@thapar.com', 'kk', 'Solved'),
(4, 'll@gmail.com', 'docu1.png', 'Admin@thapar.com', 'kk', 'Pending'),
(5, 'll@gmail.com', 'Book1.xlsx', 'Admin@thapar.com', 'kk', 'Pending'),
(6, 'Admin@thapar.com', 'class.png', 'Admin@thapar.com', 'ddd', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `triage`
--

CREATE TABLE `triage` (
  `id` int(255) NOT NULL,
  `rules` varchar(255) NOT NULL,
  `rel1` varchar(255) NOT NULL,
  `rel2` varchar(255) NOT NULL,
  `cur` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `triage`
--

INSERT INTO `triage` (`id`, `rules`, `rel1`, `rel2`, `cur`) VALUES
(20, 'mm', 'mm', 'mm', 2),
(21, 'mm', 'mm', 'mm', 2),
(23, 'mm', 'mm', 'mm', 2),
(24, 'mm', 'mm', 'mm', 2),
(26, 'mm', 'mm', 'mm', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `img` longblob NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` bigint(10) DEFAULT NULL,
  `product` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `imurl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `img`, `email`, `password`, `mobile`, `product`, `role`, `imurl`) VALUES
(1, 'Yogayata V', 0x3f3f3f3f00104a464946000101000001000100003f3f00430006040506050406060506070706080a100a0a09090a140e0f0c1017141818171416161a1d251f1a1b231c1616202c20232627292a29191f2d302d2830252829283f3f000b080239013f010111003f3f001c00010002030101010000000000000000000007080305060402013f3f00080101000000013f0000000000000000000000000000000000000000000000000000000000033f103f3f3f04000000000000423f3f363f3f00033f3f3f3f12580000015d34063f3f00001c74113f3f3f5b70000005753f3f3f3d3f00003f572d793f3f59000000104f162c3f3f0002193f3f3f137e000000, 'Admin@thapar.com', '12345', 7986258542, 'Cross-Sell', 'Admin', 'http://www.goines.net/acra_book/acra_content/files/sequence%20letters/sequence_y.jpg'),
(2, 'Rajni Verma', 0x3f504e470d0a1a0a0000000d494844520000073f0000073f08060000003f1f3f0000000006624b4744003f003f003f3f3f3f3f0000200049444154783f3f3f773f3f67413f3f3f6412082110023f173f4a471045103f2a2502063f403f3f0554442c3f3f17512e78513f3f0bd7825c040404053fd291281d3f50422021182024210452493f3f3f3f1f3f193f263fcc99733f3f3f3f3f5e6b3f752627593f773f3fcc993f3f3f3f2d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003f1d3f343a600d3f593f3f7a3f3f100000003f3f3f3f3f6a3f3f3f3f3f7b, 'Super_User@thapar.com', '12345', 8591223240, 'Cross-Sell', 'Head_UW', 'http://www.goines.net/acra_book/acra_content/files/sequence%20letters/sequence_r.jpg'),
(3, 'Davinder V', 0x3f3f3f3f00104a464946000101010060006000003f3f0043000a07070907060a0908090b0b0a0c0f19100f0e0e0f1e161712192420262523202322282d3930282a362b2223324432363b3d4040402630464b453e4a393f403d3f3f0043010b0b0b0f0d0f1d10101d3d2923293d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3f3f001108003f003f030122000211010311013f3f001f0000010501010101010100000000000000000102030405060708090a0b3f3f003f100002010303020403050504040000017d01020300041105122131410613516107227114323f3f3f08, 'UW@thapar.com', '12345', 7986258542, 'Sub-Tri', 'UW', 'https://pbs.twimg.com/profile_images/2327980318/Letter-D_400x400.jpg'),
(4, 'Varinder S', 0x3f3f3f3f00104a464946000101010000000000003f3f002e4578696600004d4d002a0000000800024000000300000001004d0000400100010000000100000000000000003f3f0043000a07070907060a0908090b0b0a0c0f19100f0e0e0f1e161712192420262523202322282d3930282a362b2223324432363b3d4040402630464b453e4a393f403d3f3f0043010b0b0b0f0d0f1d10101d3d2923293d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3f3f0011080130013f030122000211010311013f3f001f0000010501010101010100000000000000000102030405060708, 'Broker@thapar.com', '12345', 7986258542, 'Cross-Sell', 'Broker', 'https://www.drodd.com/images14/v27.jpg'),
(5, 'Gurdeep S', 0x3f504e470d0a1a0a0000000d494844520000053f0000053f08040000003f3c3f3f0000443f49444154783f3f3f3f713fd89a3f3f3f543f7f310331033103210331033f2330770462476076043f23683a3f3f22682a3f0d654045303f3f3f1e3f2d3f3f3f07163f754d3f543f3a553f0f5e3f3f6f2e2f2c3f3f3f060000183f3f31020000103f00003f700700003f0e000008770000403f03003f700700003f3b0000203f0100403f0300003f1d00003f3b0000203f0100003f0e00003f1d0000103f00003f700700003f0e000008770000403f03003f700700003f3b000008770000403f0300003f1d00003f3b0000203f0100003f0e00003f1d0000103f0000, 'Developer@thapar.com', '12345', 7986258542, 'Bod', 'Developer', 'https://www.freepnglogos.com/uploads/g-letter-png/uppercase-letter-g-1.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `curlist`
--
ALTER TABLE `curlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doc`
--
ALTER TABLE `doc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `docu`
--
ALTER TABLE `docu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `docu1`
--
ALTER TABLE `docu1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `documen`
--
ALTER TABLE `documen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `filter`
--
ALTER TABLE `filter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `filter2`
--
ALTER TABLE `filter2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model`
--
ALTER TABLE `model`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modelf`
--
ALTER TABLE `modelf`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `overview`
--
ALTER TABLE `overview`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support`
--
ALTER TABLE `support`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `triage`
--
ALTER TABLE `triage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `curlist`
--
ALTER TABLE `curlist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `doc`
--
ALTER TABLE `doc`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `docu`
--
ALTER TABLE `docu`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `docu1`
--
ALTER TABLE `docu1`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `documen`
--
ALTER TABLE `documen`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `filter`
--
ALTER TABLE `filter`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `filter2`
--
ALTER TABLE `filter2`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `model`
--
ALTER TABLE `model`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `modelf`
--
ALTER TABLE `modelf`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `overview`
--
ALTER TABLE `overview`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `support`
--
ALTER TABLE `support`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `triage`
--
ALTER TABLE `triage`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
