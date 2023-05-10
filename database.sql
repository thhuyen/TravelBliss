-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2023 at 08:57 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travelblist`
--

-- --------------------------------------------------------

--
-- Table structure for table `coachs`
--

CREATE TABLE `coachs` (
  `CoachId` int(11) NOT NULL,
  `CoachName` text NOT NULL,
  `CoachPrice` float NOT NULL,
  `EmtySeat` int(11) NOT NULL,
  `TotalSeat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coachs`
--

INSERT INTO `coachs` (`CoachId`, `CoachName`, `CoachPrice`, `EmtySeat`, `TotalSeat`) VALUES
(1, 'Standard seat', 1000000, 26, 56),
(2, '4 sleeper cabins', 4000000, 14, 28);

-- --------------------------------------------------------

--
-- Table structure for table `passengers`
--

CREATE TABLE `passengers` (
  `PassengerId` int(11) NOT NULL,
  `PassengerIdentity` text DEFAULT NULL,
  `PassengerName` text NOT NULL,
  `PassengerBithday` date NOT NULL,
  `Subject` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `SeatId` int(11) NOT NULL,
  `CoachId` int(11) NOT NULL,
  `Status` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`SeatId`, `CoachId`, `Status`, `level`) VALUES
(1, 1, 0, 1),
(6, 1, 1, 1),
(7, 1, 1, 1),
(8, 1, 1, 1),
(9, 1, 1, 1),
(10, 1, 0, 1),
(11, 1, 0, 1),
(12, 1, 0, 1),
(13, 1, 1, 1),
(14, 1, 1, 1),
(15, 1, 1, 1),
(16, 1, 0, 1),
(17, 1, 0, 1),
(18, 1, 0, 1),
(19, 1, 0, 1),
(20, 1, 0, 1),
(21, 1, 1, 1),
(22, 1, 0, 1),
(23, 1, 0, 1),
(24, 1, 1, 1),
(25, 1, 1, 1),
(26, 1, 0, 1),
(27, 1, 0, 1),
(28, 1, 1, 1),
(29, 1, 0, 1),
(30, 1, 0, 1),
(31, 1, 1, 1),
(32, 1, 1, 1),
(33, 1, 0, 1),
(34, 1, 1, 1),
(35, 1, 1, 1),
(36, 1, 1, 1),
(37, 1, 1, 1),
(38, 1, 0, 1),
(39, 1, 0, 1),
(40, 1, 0, 1),
(41, 1, 1, 1),
(42, 1, 1, 1),
(43, 1, 1, 1),
(44, 1, 1, 1),
(45, 1, 0, 1),
(46, 1, 0, 1),
(47, 1, 0, 1),
(48, 1, 1, 1),
(49, 1, 1, 1),
(50, 1, 1, 1),
(51, 1, 1, 1),
(52, 1, 1, 1),
(53, 1, 0, 1),
(54, 1, 0, 1),
(55, 1, 0, 1),
(56, 1, 1, 1),
(57, 1, 1, 1),
(58, 1, 1, 1),
(59, 1, 1, 1),
(60, 1, 0, 1),
(62, 2, 0, 1),
(63, 2, 1, 1),
(64, 2, 0, 1),
(65, 2, 1, 1),
(66, 2, 0, 1),
(67, 2, 1, 1),
(68, 2, 0, 1),
(69, 2, 1, 1),
(70, 2, 0, 1),
(71, 2, 1, 1),
(72, 2, 0, 1),
(73, 2, 1, 1),
(74, 2, 0, 1),
(75, 2, 1, 1),
(76, 2, 0, 2),
(77, 2, 1, 2),
(78, 2, 0, 2),
(79, 2, 1, 2),
(80, 2, 0, 2),
(81, 2, 1, 2),
(82, 2, 0, 2),
(83, 2, 1, 2),
(84, 2, 0, 2),
(85, 2, 1, 2),
(86, 2, 0, 2),
(87, 2, 1, 2),
(88, 2, 0, 2),
(89, 2, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `TicketId` varchar(100) NOT NULL,
  `TicketDate` datetime NOT NULL,
  `Username` varchar(10) NOT NULL,
  `TotalTicket` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tickets_details`
--

CREATE TABLE `tickets_details` (
  `DetailsId` int(11) NOT NULL,
  `TicketId` varchar(100) NOT NULL,
  `PassengerId` int(11) NOT NULL,
  `DeparturePlace` text NOT NULL,
  `DepartureDate` datetime NOT NULL,
  `ArrivalPlace` text NOT NULL,
  `ArrivalDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `Username` varchar(10) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Email` text NOT NULL,
  `Fullname` text NOT NULL,
  `Birthday` date DEFAULT current_timestamp(),
  `Identity_number` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `Username`, `Password`, `Email`, `Fullname`, `Birthday`, `Identity_number`) VALUES
(1, '0788385466', 'admin', 'admin@gmail.com', 'admin', '2002-04-26', '0'),
(5, '0788385467', 'Yangyang@99', 'minhnhu@gmail.com', 'Le Minh Nhu', NULL, NULL),
(6, '0788385469', 'Newpass@123', 'vananh@gmail.com', 'Tran Huynh Van Anh', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coachs`
--
ALTER TABLE `coachs`
  ADD PRIMARY KEY (`CoachId`);

--
-- Indexes for table `passengers`
--
ALTER TABLE `passengers`
  ADD PRIMARY KEY (`PassengerId`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`SeatId`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`TicketId`),
  ADD KEY `ticket_fk_1` (`Username`);

--
-- Indexes for table `tickets_details`
--
ALTER TABLE `tickets_details`
  ADD PRIMARY KEY (`DetailsId`),
  ADD KEY `details_fk_2` (`PassengerId`),
  ADD KEY `details_fk_1` (`TicketId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`) USING BTREE,
  ADD UNIQUE KEY `Username` (`Username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coachs`
--
ALTER TABLE `coachs`
  MODIFY `CoachId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `passengers`
--
ALTER TABLE `passengers`
  MODIFY `PassengerId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `SeatId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `tickets_details`
--
ALTER TABLE `tickets_details`
  MODIFY `DetailsId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `ticket_fk_1` FOREIGN KEY (`Username`) REFERENCES `users` (`Username`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `tickets_details`
--
ALTER TABLE `tickets_details`
  ADD CONSTRAINT `details_fk_1` FOREIGN KEY (`TicketId`) REFERENCES `tickets` (`TicketId`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `details_fk_2` FOREIGN KEY (`PassengerId`) REFERENCES `passengers` (`PassengerId`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
